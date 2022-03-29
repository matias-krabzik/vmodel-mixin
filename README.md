# vmodel-mixin

Sometimes when we build our own Vue components, we would like them to have the ability to use the v-model directive to pass them the value they need to function. 
Here we have a proposal, install this mixin in your project and then include it in your components as you will see below.

## Add it to your project
```node
npm install vmodel-mixin --save
```

## How to use it

Import and add the mixin to your custom component. 
Use the 'mixval' property to access the information passed through the v-model.

```vue
<template>
    <div>
        <h1> {{ mixval }}</h1>
    </div>
</template>

<script>
    import vmodel from "vmodel-mixin"

    export default {
        name: 'cumtom-component',
        mixins: [ vmodel ]
    }
</script>
```

Then, you can include in your App the component to use it

```vue
<template>
    <div>
        <cumtom-component v-model="title"></cumtom-component>
    </div>
</template>

<script>
    import CustomComponent from "./custom-component";

    export default {
        name: 'App',
        components: { 
            CustomComponent 
        }, 
        data() {
            return {
                title: "I'm using the vmodel-mixin awesome module."
            }
        }
    }
</script>

```