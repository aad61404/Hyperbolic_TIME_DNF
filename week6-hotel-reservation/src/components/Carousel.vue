<template>
  <div id="carousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->


    <!-- The slideshow -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../../public/images/home/photo-1501876725168-00c445821c9e@2x.png" alt="Los Angeles" width="1280" height="700" />
      </div>
      <div class="carousel-item">
        <img src="../../public/images/home/photo-1528908929486-dfaa209c6986 (1)@2x.png" alt="Chicago" width="1280" height="700" />
      </div>
      <div class="carousel-item">
        <img src="../../public/images/home/photo-1552902019-a6dddd56544a@2x.png" alt="New York" width="1280" height="700" />
      </div>
    </div>

    <!-- Left and right controls -->

    <a class="carousel-control-next" href="#carousel" data-slide="next">
      <img src="../../public/images/home/right-arrow.svg" alt="" srcset="">
    </a>
  </div>
</template>


<script>
export default {
  name: "carousel"
};
</script>