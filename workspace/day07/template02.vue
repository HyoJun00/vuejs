<template>
    <div>
        <h1>Hello, {{}}</h1>
        <p>Single File Component</p>      
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: "양효준",
        };
    }
};
</script>

<style>
h1 {
    color: blue;
}    
</style>