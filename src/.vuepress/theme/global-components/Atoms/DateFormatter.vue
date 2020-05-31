<template>
  <div>
    {{ formattedDate }}
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "DateFormatter",
  props: {
    date: {},
  },
  computed: {
    formattedDate() {
      return dayjs(this.date).format("DD/MM/YYYY");
    },
  },
};
</script>

<style scoped></style>
