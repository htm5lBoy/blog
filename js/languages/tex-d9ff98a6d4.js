module.exports=function(e){var n={className:"tag",begin:/\\/,relevance:0,contains:[{className:"name",variants:[{begin:/[a-zA-Zа-яА-я]+[*]?/},{begin:/[^a-zA-Zа-яА-я0-9]/}],starts:{endsWithParent:!0,relevance:0,contains:[{className:"string",variants:[{begin:/\[/,end:/\]/},{begin:/\{/,end:/\}/}]},{begin:/\s*=\s*/,endsWithParent:!0,relevance:0,contains:[{className:"number",begin:/-?\d*\.?\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?/}]}]}}]};return{contains:[n,{className:"formula",contains:[n],relevance:0,variants:[{begin:/\$\$/,end:/\$\$/},{begin:/\$/,end:/\$/}]},e.COMMENT("%","$",{relevance:0})]}};