# # <%= classyName %> Mixin

# Include this mixin in your class like so :

###
  ```coffeescript
    class Whatever extends Component
      @extend <%= containerObject %>.<%= classyName %>
  ```
###

# Getter setter methods will be created for you instance properties if you add them to the data context in your constructor.

###
  ```coffeescript
    class Whatever extends Component
      @extend <%= containerObject %>.<%= classyName %>
      constructor: ( context = {} ) ->
        @data.instanceProperty = @instanceProperty
        super
  ```
###

<%= containerObject %>.<%= classyName %> =
###
  classMethod: -> return "example"
  classProperty: "example"
###
  extended: ->
    @include
    ###
      instanceMethod: -> return @instanceProperty
      instanceProperty: "example"
      events:
        "click": ( event, template ) ->
          template.instanceMethod()
    ###