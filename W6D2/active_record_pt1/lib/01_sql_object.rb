require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    return @columns if @columns
    var = DBConnection.execute2(<<-SQL).first
    SELECT
      *
    FROM
      #{self.table_name}
    LIMIT
      0
  SQL
    var.map! {|ele| ele.to_sym }
    @columns = var
    # ...
  end

  def self.finalize!
    self.columns.each do |var|
      define_method(var) do
      self.attributes[var]
      end

      define_method("#{var}=") do |value|
        self.attributes[var] = value
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
    # ...
  end

  def self.table_name
    @table_name || self.name.underscore.pluralize
    # ...
  end

  def self.all
    results = DBConnection.execute(<<-SQL)
    SELECT
      #{table_name}.*
    FROM
      #{table_name}
  SQL
    parse_all(results)
    # ...
  end

  def self.parse_all(results)
    results.map { |ele| self.new(ele)}
    # ...
  end

  def self.find(id)
    var = DBConnection.execute(<<-SQL, id)
    SELECT
      #{table_name}.*
    FROM
      #{table_name}
    WHERE
      #{table_name}.id = ?
    SQL

    parse_all(var).first
    # ...
  end

  def initialize(params = {})

    params.each do |key, val|
        key = key.to_sym
        if self.class.columns.include?(key)
          self.send("#{key}=", val)
        else
          raise "unknown attribute '#{key}'"
        end
    end
    # ...
  end

  def attributes
    @attributes ||= {}
    # ...
  end

  def attribute_values
    self.class.columns.map { |ele| self.send(ele) }
    # ...
  end

  def insert
    columns = self.class.columns.drop(1)
    col_names = columns.map(&:to_s).join(", ")
    question_marks = (["?"] * columns.count).join(", ")

    DBConnection.execute(<<-SQL, *attribute_values.drop(1))
      INSERT INTO
        #{self.class.table_name} (#{col_names})
      VALUES
        (#{question_marks})
    SQL

    self.id = DBConnection.last_insert_row_id
    # ...
  end

  def update
    set = self.class.columns.map do |ele|
      "#{ele} = ?"
    end.join(", ")

    DBConnection.execute(<<-SQL, *attribute_values, id)
    UPDATE
      #{self.class.table_name}
    SET
      #{set}
    WHERE
      #{self.class.table_name}.id = ?
      SQL
    # ...
  end

  def save
    if id.nil?
      insert
    else
      update
    end
    # ...
  end
end
