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
    Header: () => import('../components/1-one/0-Header.vue'),
    SectionOne: () => import('../components/1-one/1-SectionOne.vue'),
    SectionTwo: () => import('../components/1-one/2-SectionTwo.vue'),
    SectionThree: () => import('../components/1-one/3-SectionThree.vue'),
    SectionFour: () => import('../components/1-one/4-SectionFour.vue'),
    SectionFive: () => import('../components/1-one/5-SectionFive.vue'),
    Footer: () => import('../components/1-one/6-Footer.vue'),
  },
};
</script>
