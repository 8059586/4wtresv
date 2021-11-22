AFRAME.registerComponent("move",{
    schema:{
        x:{type:"number",default:1}
    },
    tick:function(){
        this.data.x=this.data.x + 0.1
        var pos = this.el.getAttribute("position")
        pos.x = this.data.x
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})