<template>
    <Tabs value="name1">
        <TabPane label="库存图书" name="name1"><flexbox_test></flexbox_test></TabPane>
        <TabPane label="Isbn添加" name="name2"><addbookfromisbn></addbookfromisbn></TabPane>
        <TabPane label="手动添加" name="name3"><addbookfromhand></addbookfromhand></TabPane>
    </Tabs>
</template>
<script>
// eslint-disable-next-line camelcase
import Flexbox_test from './flexbox_test';
import addbookfromhand from '../views/addbookfromhand';
import addbookfromisbn from "../views/addbookfromisbn";


export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Flexbox_test, addbookfromisbn, addbookfromhand }
}
</script>
