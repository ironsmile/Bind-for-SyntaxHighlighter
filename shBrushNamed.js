/*
 *
 *  Named config
 *
 */

SyntaxHighlighter.regexLib.ipv4 = /\b(([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\.){3,3}([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])(\/\d+)?\b/gm;
SyntaxHighlighter.regexLib.ipv6 = /\b([\da-f]{0,4}:){1,7}[\da-f]{0,4}(\/\d+)?\b/gmi;

SyntaxHighlighter.brushes.Named = function()
{
  
  var keywords    = 'options acl view zone in include';
  
  var labels      = 'file print-time print-severity print-category ' +
					'listen-on-v6 directory default general pid-file ' +
					'match-clients type category recursion keys allow ' +
					'forward logging controls forwarders inet port';
					
  var values      = 'any trusted none yes no master slave hint' +
					'first';
  
  var r = SyntaxHighlighter.regexLib;
  
  this.regexList = [
      { regex: r.singleLineCComments,                           css: 'comments' },
	  { regex: r.multiLineCComments,							css: 'comments' },
      { regex: r.multiLineDoubleQuotedString,                   css: 'string' },
	  { regex: r.multiLineSingleQuotedString,                   css: 'string' },
      { regex: new RegExp(this.getKeywords(values), 'gmi'),     css: 'color2' },
      { regex: new RegExp(this.getKeywords(labels), 'gmi'),     css: 'color1' },
	  { regex: /\ballow(-\w+)+\b/gmi,                           css: 'color1' },
	  { regex: r.ipv4,                                          css: 'color3' },
	  { regex: r.ipv6,                                          css: 'color3' },
      { regex: new RegExp(this.getKeywords(keywords), 'gmi'),   css: 'keyword' }
      ];
};
SyntaxHighlighter.brushes.Named.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Named.aliases  = ['bind', 'named'];

/*
 *
 *  Named zones
 *
 */

SyntaxHighlighter.brushes.NamedZone = function()
{

  var keywords    = 'ORIGIN TTL INCLUDE';
  var operators   = 'NS A AAAA IN SOA CNAME MX TXT';
  
  var r = SyntaxHighlighter.regexLib;
   
  this.regexList = [
      { regex: /;(.*)$/gm,                                                css: 'comments' },
      { regex: r.multiLineDoubleQuotedString,                             css: 'string' },
	  { regex: r.multiLineSingleQuotedString,                             css: 'string' },
      { regex: new RegExp(this.getKeywords(operators), 'gmi'),            css: 'color1' },
      { regex: new RegExp(this.getKeywords(keywords), 'gmi'),             css: 'keyword' },
	  { regex: r.ipv4,                                                    css: 'color3' },
	  { regex: r.ipv6,                                                    css: 'color3' }
      ];
};
SyntaxHighlighter.brushes.NamedZone.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.NamedZone.aliases  = ['bindzone', 'namedzone'];