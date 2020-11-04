export default{
  data(){
    return {
      barList:[{
        name:"快赚",
        id:"1"
      },{
        name:"益智",
        id:"2"
      },{
        name:"手游",
        id:"3"
      },{
        name:"免安装",
        id:"4"
      }],
      barId:1,//导航栏选中id
    }
  },
  methods: {
    // 改变导航栏
    changeBar(id){
      this.barId = id
    },
  }


}