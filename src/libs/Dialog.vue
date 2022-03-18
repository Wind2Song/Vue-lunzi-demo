<template>
    <div class="dialog-over"></div>
    <div class="dialog-wrapper">
        <header>标题</header>
        <main>
            <p></p>
        </main>
        <footer>
            <Button>OK</Button>
            <Button>Cancel</Button>
        </footer>
    </div>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
    components:{Button}
}
</script>