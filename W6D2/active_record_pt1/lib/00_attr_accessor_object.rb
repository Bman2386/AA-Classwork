class AttrAccessorObject
  def self.my_attr_accessor(*names)
    names.each do |name|
      define_method(name) do
        new_name = "@" + name.to_s
        instance_variable_get(new_name)
        # instance_variable_set(new_name)
      end
      new_name = name.to_s + '='
      define_method(new_name) do |value|
        ivar = "@" + name.to_s
        instance_variable_set(ivar, value)
      end
      
    end
    

  end
end
