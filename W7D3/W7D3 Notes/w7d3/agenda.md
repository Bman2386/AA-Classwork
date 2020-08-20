## Lecture Agenda:
- Music App Solution (Auth portion)
- Application testing Motivations
- Rails Test Environment Setup
- Model Tests
- Controller Tests
- Integration Tests with Capybara
- Kahoot!


## Motivations for testing
- make sure app works
- good tests == documentation
- a good way to get a sense of a company's code base
- facilitate collaboration
- extend and refactor while checking that you don't break existing functionality

- you'll probably write more test code than production code out in the wild, so today will be excellent practice
- (Caypbara won't be explicitly tested on Rails 2, but understanding how to read it will help with debugging)


## TDD workflow
* red, green, refactor: ensure the test fails, write code to pass the test, clean up code
* see the TDD pyramid


## Rails Test Environment Setup
* see `setup_snippets.rb` in w7d3 folder


## Writing tests
* Ask: what is this thing (class, method) responsible for? Test exactly that.


## Test files
* all tests are written in the `bubbler/spec` folder and organized in subfolders (`models`, `controllers`, `features`)
    * Models: `/bubbler/spec/models/user_spec.rb`
    * Controllers: `/bubbler/spec/controllers/bubbles_controller.rb`
    * Views: `/bubbler/spec/features/bubbles.rb`
* additional files & folders:
    * `/bubbler/spec/factories` - houses all the factory files
    * `/bubbler/spec/factories/spec_helper.rb` - where helper methods for your tests would be defined