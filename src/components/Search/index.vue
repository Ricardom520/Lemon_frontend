<template>
    <div class="wk_search">
        <p :class="[
                        focus ? 'active tags' : 'tags',
                        nums ? 'active' : '',
                      ]"
            @click="onClickP($event)"
        >
            <i class="iconfont wk-icon-search"></i>
            <span   :class="[
                        nums ? 'none' : '',
                        focus ? 'none' :''
                    ]">搜索</span>
        </p>
        <input 
            type="search" 
            class="wk_search_input" 
            v-model="value"
            @focus="onFocus" 
            @blur="onBlur" 
            @input="getInfo($event)"
        >
    </div>
</template>

<script>
export default {
    name: 'wk-search',
    data() {
        return {
            focus: false,
            nums: 0,
            value: ''
        }
    },
    methods: {
        onFocus() {
            this.focus = true
        },
        onBlur() {
            this.focus = false
        },
        getInfo(e) {
            this.nums = this.value.length
        },
        onClickP(e) {
            let parent = e.target.parentNode.parentNode;
            let input_target = parent.getElementsByClassName('wk_search_input')[0];

            input_target.focus();
            this.focus = true;
        }
    }
}
</script>

<style lang="less" scoped>
.wk_search {
    position: relative;
    color: #AFB2B9;
    width: 100%;
    border-radius: 1rem;
    background-color: #ECF1F4;
    .tags {
        position: absolute;
        left: 50%;
        top: 50%;
        font-size: .9rem;
        transform: translateX(-40%) translateY(-55%);
        transition: left ease .3s;
    }
    .tags.active {
        left: .5rem;
        transform: translateX(0) translateY(-55%);
    }
    .wk_search_input {
        color: #AFB2B9;
        font-size: .8rem;
        width: 100%;
        height: 100%;
        outline: none;
        padding: .6rem 1.2rem .6rem 2.2rem;
        border: none;
        background-color: transparent;
    }
    .none {
        display: none;
    }
}
</style>

