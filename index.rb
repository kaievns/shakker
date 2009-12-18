#!/usr/bin/env ruby

#
# A simple Sinatra based application to run our stuff
#
# Installation:
#   sudo gem install sinatra
#
# Fire up:
#   ./index.rb
#
# Browse:
#   http://localhost:4567
# 
# Copyright (C) 2009 Nikolay V. Nemshilov aka St.
#

# The frameworks to be tested in order
frameworks = [
  {
    :name => "Pure DOM",
    :file => "dom.js",
    :test => "dom.js"
  }, {
    :name => "RightJS 1.5.1",
    :file => "right-151.js",
    :test => "right.js"
  }, {
    :name => "jQuery 1.3.2",
    :file => "jq-132.js",
    :test => "jquery.js"
  }, {
    :name => "jQuery 1.4a2",
    :file => "jq-140.js",
    :test => "jquery.js"
  }, {
    :name => "Prototype 1.6.1",
    :file => "prototype-161.js",
    :test => "proto.js"
  }, {
    :name => "Mootools 1.2.4",
    :file => "mootools-124.js",
    :test => "moo.js"
  }, {
    :name => "Dojo 1.4.0",
    :file => "dojo-140.js",
    :test => "dojo.js"
  }
]

base_framework = frameworks[1]

############################################################
# 
#  Sinatra's stuff
#
############################################################
require 'rubygems'
require 'sinatra'

set :frameworks,     frameworks.each{ |lib| lib[:id] = lib[:file].gsub(/(\.|\-)/, '_') }
set :base_framework, base_framework[:id]

get "/" do
  @frameworks     = options.frameworks
  @base_framework = options.base_framework
  erb :main
end

get "/test/:id" do
  @framework = options.frameworks.detect do |lib|
    lib[:id] == params[:id]
  end
  erb :test
end
