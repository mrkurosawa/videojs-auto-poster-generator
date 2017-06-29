( function( $, undefined ) {
    function setPoster( { posterSec = 10, posterWidth = "auto", posterHeight = "auto" } = {} )
    {
        var video_element = this.$( 'video' );
        var videojs_this = this;
        var dom_div = $( "#" + this.id() );

        video_element.addEventListener( 'loadeddata', function() {
            if( posterSec.toString().indexOf( '%' ) > 0 ) {
                posterSec = videojs_this.duration() * ( parseFloat( posterSec ) / 100.0 );
            }
            videojs_this.currentTime( posterSec );
            if( posterWidth == "auto" && posterHeight == "auto" ) {
                posterWidth = videojs_this.videoWidth();
                posterHeight = videojs_this.videoHeight();
            }
        }, false );
        
        video_element.addEventListener( 'seeked', function() {
            if( !dom_div.attr( "sutoposter" ) ) {
                var c = document.createElement( "canvas" );
                var ctx = c.getContext( "2d" );
                c.width = posterWidth;
                c.height = posterHeight;
                ctx.drawImage( video_element, 0, 0, posterWidth, posterHeight );
                var poster_data = c.toDataURL();
                
                videojs_this.currentTime( 0 );
                videojs_this.poster( poster_data );
                
                dom_div.attr( "sutoposter", "true" )
            }
        
        }, false );
    }
    
    videojs.plugin( 'setPoster', setPoster );
} )( jQuery );