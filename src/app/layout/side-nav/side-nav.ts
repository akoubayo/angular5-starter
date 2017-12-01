export class SideNav {
    public menu = [
                {
                title: 'Planning',
                access: false,
                access_name:'planning',
                menu:true,
                icon:'',
                sub_menu:[
                    {
                        title:'Mes disponibilité',
                        menu:true,
                        access:true,
                        access_name:'create_available',
                        link:'planning/avaibility'
                    },
                    {
                        title:'Events',
                        menu:true,
                        access:true,
                        access_name:'create_event',
                        link:'planning/events',
                    },
                    {
                        'title':'Add events',
                        menu:true,
                        access:true,
                        access_name:'create_event',
                        link:'events/add',
                    }
                ]

            },
            {
                access:true,
                access_name:'profils',
                title:'Profils',
                menu:true,
                icon:'',
                link:'profil',

            },
                      {
                access:true,
                access_name:'profils',
                title:'Profils',
                menu:true,
                icon:'',
                link:'profil',

            },
                      {
                access:true,
                access_name:'profils',
                title:'Profils',
                menu:true,
                icon:'',
                link:'profil',

            },
                      {
                access:true,
                access_name:'profils',
                title:'Profils',
                menu:true,
                icon:'',
                link:'profil',

            },
                      {
                access:true,
                access_name:'profils',
                title:'Profils',
                menu:true,
                icon:'',
                link:'profil',

            },
        ]
        public constructor(access_menu:any){
            this.menu.map((r_menu:any,i_menu) => {
                    if(r_menu.sub_menu) {
                        r_menu.sub_menu.map((r_sub, i_sub )=> {
                            if(access_menu[r_sub.access_name]){
                                r_sub.access = true;
                            }
                        });
                    }
                    if(access_menu[r_menu.access_name]) {
                        r_menu.access = true;
                    }
                    // console.log(r_menu)
                    // console.log(r['create_available']);
                })

                // res.map(r=>{
                //     console.log(r);
                // })
            //access_menu.map((r, i) => {
                // this.menu.map((r_menu:any,i_menu) => {
                //     if(r_menu.sub_menu) {
                //         r_menu.sub_menu.map((r_sub, i_sub )=> {
                //             console.log(r[r_sub.access_name])
                //             if(r[r_sub.access_name]){
                //                 console.log("here");
                //                 console.log(r_sub)
                //                 r_sub.access = true;
                //             }
                //         });
                //     }
                //     if(r[r_menu.access_name]) {
                //         r_menu.access = true;
                //     }
                //     // console.log(r_menu)
                //     // console.log(r['create_available']);
                // })

                // res.map(r=>{
                //     console.log(r);
                // })
            //})
        }




}





// "roles":[{"titre":"Planning","access":true,"menu":true,"sub_menu":[{"titre":"Mes dispo","access":true,"menu":true},{"titre":"event","access":true,"menu":true}]},{"titre":"Profils","access":true,"menu":true},{"access":true,"menu":false}]}]
