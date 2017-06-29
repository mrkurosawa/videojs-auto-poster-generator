# videojs-auto-poster-generator

Create poster at specified time with only javascript, client-side.

It creates 2d contex and drawImage into it, after uses toDataURL.

To use this plugin just call:
```
videojs( "you-element-id" ).setPoster( { params... } );
```

Default param values:

**posterSec** = 10 (Can be in seconds or percentage)

**posterWidth** = "auto" (If auto then get sizes from videosource)

**posterHeight** = "auto"
