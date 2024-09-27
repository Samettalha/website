import { Routes } from '@angular/router';

export const routes: Routes = 
[
    {
        path: "", loadComponent:()=>import("./anasayfa/anasayfa.component").then(x=>x.AnasayfaComponent)
    },
    {
        path: "hakkinda", loadComponent:()=>import("./hakkinda/hakkinda.component").then(x=>x.HakkindaComponent)
    },
    {
        path: "iletisim", loadComponent:()=>import("./iletisim/iletisim.component").then(x=>x.IletisimComponent)
    },
    {
        path: "urunler", loadComponent:()=>import("./urunler/urunler.component").then(x=>x.UrunlerComponent)
    },
    {
        path: "yariscilar_ligi", loadComponent:()=>import("./yariscilar_ligi/yariscilar-ligi.component").then(x=>x.YariscilarLigiComponent)
    },
    {
        path: "ekipman_paketi", loadComponent:()=>import("./ekipman_paketi/ekpipman-paketi.component").then(x=>x.EkpipmanPaketiComponent)
    },
    {
        path: "blog", loadComponent:()=>import("./blog/blog.component").then(x=>x.BlogComponent)
    },
    {
        path: "kayit_ol", loadComponent:()=>import("./kayit-ol/kayit-ol.component").then(x=>x.KayitOlComponent)
    },
    {
        path: "oturum_ac", loadComponent:()=>import("./oturum-ac/oturum-ac.component").then(x=>x.OturumAcComponent)
    },
    {
        path: "motor_teklif_al", loadComponent:()=>import("./motor-teklif-al/motor-teklif-al.component").then(x=>x.MotorTeklifAlComponent)
    },
    {
        path: "qr_okuyucu", loadComponent:()=>import("./qr-okutucu/qr-okutucu.component").then(x=>x.QROkutucuComponent)
    },
    {
        path: "urun_arama", loadComponent:()=>import("./urun-arama/urun-arama.component").then(x=>x.UrunAramaComponent)
    },
    
];
