/* User-supplied UTMify integrations, decoded for auditability. */
(function () {
  'use strict';
  var integrations = [
    {url: 'https://cdn.utmify.com.br/scripts/pixel/pixel.js', attributes: [], globals: [{name: 'pixelId', value: '6ae2778d74d02b59edcb79bf'}]},
    {url: 'https://cdn.utmify.com.br/scripts/utms/latest.js', attributes: [{name: 'data-utmify-prevent-subids', value: ''}], globals: []}
  ];
  integrations.forEach(function (integration) {
    integration.globals.forEach(function (item) { window[item.name] = item.value; });
    if (Array.prototype.some.call(document.scripts, function (script) { return script.src === integration.url; })) return;
    var script = document.createElement('script');
    script.src = integration.url;
    script.async = true;
    script.defer = true;
    integration.attributes.forEach(function (attribute) { script.setAttribute(attribute.name, attribute.value); });
    (document.head || document.documentElement).appendChild(script);
  });
}());
