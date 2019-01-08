# React-with_Rails

This is a simple project for those want to integrate React into Rails Project
Ruby on Rails web application that uses React as its view layer.

## How to start your project

* Create New Project

    ```
    $ rails _5.2.1_ new rails-with-react -T -d postgresql --webpack=react
    ```

* Add RSpec for spec support

    Adding Rspec gem into Gemfile

    ```ruby
    group :development, :test do
        gem 'rspec-rails', '~> 3.8'
    end
    ```
* Try to Run these commands
    ```
    $ gem install bundler
    $ bundle install
    $ rails generate rspec:install
    ```
    
    ```
    $ rails db:migrate
    $ bin/setup
    ```
