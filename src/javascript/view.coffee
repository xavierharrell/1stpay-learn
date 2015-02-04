_          = require 'underscore'
Backbone   = require 'backbone'
Backbone.$ = require 'jquery'

module.exports = Backbone.View.extend

  template: require './template'

  initialize: ->
    underscoreTest = _.last([0,1,2, 'hi mom!'])
    @render()
