<template>
    <div itemscope itemtype="https://schema.org/BreadcrumbList">
      <div class="flex justify-center items-center text-base gap-x-1.5 font-poppins mt-12">
        <NuxtLink itemprop="url" to="/">
          <span itemprop="name" class="text-gray">Home</span>
        </NuxtLink>
        <Icon class="ml-1" name="material-symbols:arrow-right-alt-rounded" />
        <div v-for="(segment, index) in formattedRouteSegments" :key="index" class="flex items-center">
          <Icon v-if="index > 0" class="ml-1" name="material-symbols:arrow-right-alt-rounded" />
          <span itemscope itemtype="https://schema.org/ListItem" itemprop="itemListElement">
            <NuxtLink
              v-if="index < formattedRouteSegments.length - 1"
              :to="segment.link"
              class="text-gray"
              itemprop="item"
            >
              <span itemprop="name">{{ segment.name }}</span>
            </NuxtLink>
            <span v-else class="text-black ml-1" itemprop="item">
              <span itemprop="name">{{ segment.name }}</span>
            </span>
            <meta itemprop="position" :content="index + 1" />
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      formattedRouteSegments() {
        // Get the current path from the route
        const path = this.$route.path;
  
        // Split the path into segments and remove empty segments
        const segments = path.split('/').filter(segment => segment);
  
        // Build the segments with links
        return segments.map((segment, index) => {
          // Create the link by joining the segments up to the current index
          const link = '/' + segments.slice(0, index + 1).join('/');
          let name;
  
          // Special case for 'ui-ux-solution'
          if (segment === 'ui-ux-solution') {
            name = 'UI/UX Solution';
          } else {
            // Capitalize each word
            name = segment
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
          }
  
          return {
            name,
            link
          };
        });
      }
    }
  }
  </script>
  
  <style scoped></style>
  