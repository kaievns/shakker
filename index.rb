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
# Copyright (C) 2009-2010 Nikolay V. Nemshilov
#

# The frameworks to be tested in order
frameworks = [
  {
    :name => "Pure DOM",
    :file => "dom.js",
    :test => "dom.js"

  }, {
    :name => "Lovely 1.0.0",
    :file => "lovely-100.js",
    :test => "lovely.js"
#  }, {
#    :name => "RightJS 1.5.6",
#    :file => "right-156.js",
#    :test => "right.js"
#  }, {
#    :name => "RightJS 2.0.0",
#    :file => "right-200.js",
#    :test => "rjs-wrap.js"
  }, {
    :name => "RightJS 2.2.2",
    :file => "right-222.js",
    :test => "rjs-wrap.js"
#  }, {
#    :name => "RightJS 2.2.0",
#    :file => "right-220.js",
#    :test => "rjs-wrap.js"
#  }, {
#    :name => "RightJS 2.1.0",
#    :file => "right-210.js",
#    :test => "rjs-wrap.js"
#  }, {
#    :name => "RightJS 2.1.1",
#    :file => "right-211.js",
#    :test => "rjs-wrap.js"
#  }, {
#    :name => "RightJS 2RC2-SM",
#    :file => "right-200-rc2-safe.js",
#    :test => "rjs-safe.js"
#  }, {
#    :name => "jQuery 1.3.2",
#    :file => "jq-132.js",
#    :test => "jquery.js"
#  }, {
#    :name => "jQuery 1.4.0",
#    :file => "jq-140.js",
#    :test => "jquery.js"
#  }, {
#    :name => "jQuery 1.4.1",
#    :file => "jq-141.js",
#    :test => "jquery.js"
  }, {
    :name => "jQuery 1.6.2",
    :file => "jq-162.js",
    :test => "jquery.js"
#  }, {
#    :name => "jQuery 1.4.2",
#    :file => "jq-142.js",
#    :test => "jquery.js"
#  }, {
#    :name => "Prototype 1.6.1",
#    :file => "prototype-161.js",
#    :test => "proto.js"
#  }, {
#    :name => "MooTools 1.2.4",
#    :file => "mootools-124.js",
#    :test => "moo.js"
#  }, {
#    :name => "Dojo 1.4.1",
#    :file => "dojo-141.js",
#    :test => "dojo.js"
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
