<template>
    <aside class="sidebar">
        <div class="sidebar-wrapper">
            <div class="sidebar-menu">
                <a class="sidebar-menu-item active" href="/Select.html">
                    <span>Input 输入框</span>
                </a>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.sidebar{
    width: 16vw;
    min-width: 200px;
    height: calc(100vh - 60px);
    position: fixed;
    left: 0;
    bottom: 0;
    border-right: 1px solid #ddd;
    .sidebar-wrapper{
        width: 100%;
        height: 100%;
        overflow: auto;
        .sidebar-menu{
            padding: 20px 10px;
            .sidebar-menu-item{
                font-size: 14px;
                font-weight: 500;
                color: rgb(93, 93, 93);
                display: block;
                padding: 10px 20px;
                margin: 10px 0px;
                border-radius: 5px;
                &:hover{
                    color: #5d82d3;
                }
                &.active{
                    color: #5d82d3;
                    font-weight: 500;
                    background-color: #5d82d311;
                }
            }
        }
    }
}
</style>