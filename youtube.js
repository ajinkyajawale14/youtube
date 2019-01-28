<!-- index.html -->
<script type="module" src="/node_modules/youtube-video-js/dist/youtube-video.js"></script>
<youtube-video width="640" height="360" src="https://www.youtube.com/watch?v=ye82js0sL32" autoplay controls />
 
<script>
    const videoElement = document.querySelector('youtube-video');
    // must wait for DOM to be ready and for component to be accessible
    document.addEventListener("DOMContentLoaded", function() {
            // wait for loading
            videoElement.load().then(() => {
                // pause video after two seconds
                const timer = setTimeout(function () {
                    videoElement.pause();
                    clearTimeout(timer);
                }, 2000)
            });
      });
</script> 