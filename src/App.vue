<template>
<div style="width:1000px;height: 500px;margin: auto">
  <ibzOcrCamera
      :ocrroot="'/ocr/ocrrecord'"
      :ocrrecordid="ocrrecordid"
       />
</div>
</template>

<script>
import IbzOcrCamera from './components/IbzOcrCamera'
export default {
  name: 'App',
  components: {
    IbzOcrCamera
  },
  data() {
    return {
        ocrrecordid: "3620d286-da49-059e-30eb-f85eac2efce2",
    }
  },
  methods: {
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
