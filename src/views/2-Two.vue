<template>
  <div>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
  </div>
</template>

<script>

export default {
  name: 'one',
  components: {
    Header: () => import('../components/2-two/0-Header.vue'),
    SectionOne: () => import('../components/2-two/1-SectionOne.vue'),
    SectionTwo: () => import('../components/2-two/2-SectionTwo.vue'),
    SectionThree: () => import('../components/2-two/3-SectionThree.vue'),
    SectionFour: () => import('../components/2-two/4-SectionFour.vue'),
    SectionFive: () => import('../components/2-two/5-SectionFive.vue'),
    Footer: () => import('../components/2-two/6-Footer.vue'),
  },
};
</script>
