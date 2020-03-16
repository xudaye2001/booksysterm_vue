<template>
    <Tabs value="name1">
        <TabPane label="库存图书" name="name1"><getbooklist></getbooklist></TabPane>
        <TabPane label="Isbn添加" name="name2"><addbookfromisbn></addbookfromisbn></TabPane>
        <TabPane label="手动添加" name="name3"><addbookfromhand></addbookfromhand></TabPane>
    </Tabs>
</template>
<script>
// eslint-disable-next-line camelcase
import getbooklist from './getbooklist';
import addbookfromhand from './addbookfromhand';
import addbookfromisbn from "./addbookfromisbn";


export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { getbooklist, addbookfromisbn, addbookfromhand }
}
</script>
