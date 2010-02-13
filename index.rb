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
# Copyright (C) 2009-2010 Nikolay V. Nemshilov aka St.
#

# The frameworks to be tested in order
frameworks = [
  {
    :name => "Pure DOM",
    :file => "dom.js",
    :test => "dom.js"
  }, {
    :name => "RightJS 1.5.4",
    :file => "right-154.js",
    :test => "right.js"
  }, {
    :name => "jQuery 1.4.1",
    :file => "jq-141.js",
    :test => "jquery.js"
  }, {
    :name => "Prototype 1.6.1",
    :file => "prototype-161.js",
    :test => "proto.js"
  }, {
    :name => "MooTools 1.2.4",
    :file => "mootools-124.js",
    :test => "moo.js"
  }, {
    :name => "Dojo 1.4.1",
    :file => "dojo-141.js",
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
