# # <%= classyName %> Instance
<%= classyName %>Mixins.Selector =
  setSelector: ( selector ) ->
    Match.test selector, String
    @setData 'selector', selector

  # ##### getSelector()
  getSelector: ->
    return @getData().selector or false

  # ##### prepareSelector()
  prepareSelector: ->
    unless @getSelector()
      @setSelector "<%= name %>-#{ @getGuid() }"