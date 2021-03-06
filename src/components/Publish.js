import React from 'react';
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import './page.css';

const publishMD = `
### **期刊論文**
  
何雅齡、**廖宇賡***，2020。 著生杜鵑之微體繁殖。台灣林業科學35(2):161-72。  
**廖宇賡***、葉佩雯，2020。 唐杜鵑組織培養芽體延緩生長貯存培養技術。台灣林業科學35(1):81-96。  
吳濟琛、陳品宇、**廖宇賡**、游漢明、鍾振德、陳舜英、劉瓊霦*，2019。 檄樹種子儲藏、枝條扦插繁殖與東莨菪素定量分析。中華林學季刊52(1):63-75。  
**廖宇賡***、 程金得，2018。 組織培養均質化綠球體繁殖長葉及巨獸鹿角蕨。作物、環境與生物資訊 15: 169-183。  
**廖宇賡***、洪丞慧，2018。 二歧鹿角蕨綠球體延緩生長貯存系統之建立。作物、環境與生物資訊 15: 15-33。  
Pasaribu, B., C. -S. Chen, **Y. K. Liao**, P. -L. Jiang* and J. T. C. Tzen* (2017) Identification of caleosin and oleosin in oil bodies of pine pollen.  Plant Physiology and Biochemistry (SCI) 111: 20-29.  
何雅齡、**廖宇賡***，2016。 刻傷、低溫層積及延長光照對槲櫟橡實發芽及初期生長之促進 。中華林學季刊49(2):117-130。  
古國隆、蔡杏枚、**廖宇賡***，2016。 以簡化培養基增殖落花生毛狀根並評量其生物量與白藜蘆醇產生量。作物、環境與生物資訊 13: 14-25。  
**廖宇賡***、莊琬婷，2015。 金門原生觀賞植物唐杜鵑之微體繁殖 。中華林學季刊 48:(1)1-16。  
**Liao, Y. K.*** and I. P. Juan (2015) Improving the germination of somatic embryos of Picea morrisonicola Hayata : effects of cold storage and partial drying. Journal of Forest Research (SCI) 20: 114-124.  
**Liao, Y. K.*** and Y. Y. Ji (2014) Mass propagation of Drosera burmannii Vahl via induction of shoot fasciation and recovery of morphologically normal plantlets. Propagation of Ornamental Plants (SCI) 14: 158-170.  
古國隆、黃慧中、**廖宇賡***，2014。 加州藜蘆癒傷組織及類根莖體之誘導及其環巴胺含量分析 。作物、環境與生物資訊 11: 243-256。  
Liao, Y. K.* and M. C. Chuang (2014) Micropropagation of Quercus aliena Blume var. aliena from explants of mature trees. Taiwan Journal of Forest Science (EI) 29(2):117-131.  
古國隆、葉玟萱、**廖宇賡***，2013。 細本山葡萄毛狀根誘導、離體培養 及白藜蘆醇生產 。中華林學季刊 46(3): 255-274。  
李世豪、謝育玲、**廖宇賡***，2012。 以樟樹及相思樹枝梢材培養牛樟芝之初期生長及三萜類成分分析 。作物、環境與生物資訊 9(4): 220-224。  
古國隆、江孟縈、**廖宇賡***，2012。 以離體培養虎杖毛狀根誘引生產白藜蘆醇 。作物、環境與生物資訊 9(1): 57-70。  
Ku, K. L., C. F. Hsu and **Y. K. Liao*** (2012) Production of acteoside in hairy-root cultures of Paulownia fortunei Hemsl. Taiwan Journal of Forest Science (EI) 27(1):13-29.  
蔡杏枚、**廖宇賡***，2011。 篩選適合落花生毛狀根生長之簡化培養基。作物、環境與生物資訊 8(4): 242-253。  
**廖宇賡**、 楊勝傑、李世豪*，2011。 松茸接種於濕地松可行性之研究。作物、環境與生物資訊 8(3):181-192。  
**Liao, Y. K.*** and Y. H. Wu (2011) In vitro propagation of Platycerium bifurcatum (Vav.) C. Chr. via green globular body initiation. Botanical Studies (SCI) 52:455-463.
Yang, C. J., C. T. Chien*, **Y. K. Liao**, S. Y. Chen, J. M. Baskin, C. C. Baskin and L. L. Kuo-Huang (2011) Deep simple morphophysiological dormancy in seeds of the basal taxad Cephalotaxus. Seed Science Research (SCI) 21:215-226.  
郭淳棻、**廖宇賡**、 謝宜珊、許富雄*，2010。 不同海拔和棲地類型之盤古蟾蜍蝌蚪的形態變異。台灣生物多樣性研究 12(4):351-365。  
**廖宇賡***、莊翠婷、吳怡慧、詹惠慈，2008。以ABA、TIBA、PCIB改善濕地松不定芽繁殖系統芽體誘導及抽長之效應。 中華林學季刊 41(1):29-42。  
**Liao, Y. K.*** , C. K. Liao and Y. L. Ho (2008) Maturation of somatic embryos in two embryogenic cultures of Picea morrisonicola Hayata as affected by alternation of endogenous IAA content. Plant Cell, Tissue and Organ Culture (SCI)  93(3):257-268.  (國科會計劃NSC-92-2321-B-415-001)  
**廖宇賡***、莊翠婷，2007。以農桿根群菌轉殖泡桐之研究。台灣林業科學 22(4):381-393。(EI)。  
劉依依、**廖宇賡***、胡澤寬，2007。台灣西部地區相思樹(Acacia confusa Merr.)族群遺傳變異之研究。嘉大農林學報 4(2):32-46。  	
**廖宇賡***、謝佳玲，2006。施用巴克素(Paclobutrazol)對葫蘆竹營養生長性狀之影響。台灣林業科學 21(4):567-573。(EI)。  
**廖宇賡***、許菁芬，2005。台灣雲杉胚原性懸浮細胞之增殖與發育。嘉大農林學報 2(1):64-80。  
**廖宇賡***、陳俐萍、江逸琦，2003。Cytokinin 處理及培殖體截段方式對誘導濕地松側芽生長之效應。林業研究季刊 25(2):87-96。  
**廖宇賡***、龔慧純，2001。以濾紙襯墊培養台灣雲杉胚原性懸浮細胞誘導體胚成熟。中華林學季刊 34(4):441-451。  
**廖宇賡***，2000。臺灣雲杉胚原性癒合組織體胚發育之變異及其與生長素相關之探討。中華林學季刊 33(2):205-215。  
**廖宇賡***、H. V. Amerson，1999。濕地松(Pinus elliottii Engelm.)子葉培殖體誘導不定芽及植株再生。嘉義技術學院學報 65:35-49。  
**廖宇賡***，1999。臺灣雲杉(Picea morrisonicola Hay.)體胚發生與植株再生。中華林學季刊  32(2):161-170。  
**Liao, Y. K.*** and H. V. Amerson (1995) Slash pine(Pinus elliottii Engelm.) somatic embryogenesis Ⅱ. Maturation of somatic embryos and plant regeneration. New Forests 10:165-182.  
**Liao, Y. K.*** and H. V. Amerson (1995)  Slash pine(Pinus elliottii Engelm.) somatic embryogensis I. Initiation of embryogenic cultures from immature zygotic embryos. New Forests 10:145-163.  
  
### **研討會論文**
  
賴巧欣、**廖宇賡***，2020。 利用綠球體建立筆筒樹之懸浮培養系統。中華林學會109年森林資源永續發展研討會論文摘要集(森林經營與育林組) p.15。 國立中興大學，台中。  
柯品安、黃曜謀、**廖宇賡***，2020。 建立臺灣水龍骨綠球體繁殖系統。中華林學會109年森林資源永續發展研討會論文摘要集(森林經營與育林組) p.8。 國立中興大學，台中。  
林冠里、**廖宇賡***，2018。 激勃素處理對槲櫟微體繁殖芽體抽長之影響。中華林學會107年森林資源永續發展研討會論文集(育林與生物科技組) p.5。 國立台灣大學，台北。  
葉佩雯、**廖宇賡***，2017。 組織培養唐杜鵑之延緩生長儲存。中華林學會106年森林資源永續發展研討會論文集(森林經營與育林組) pp.6-8。 國立宜蘭大學，宜蘭。  
洪丞慧、**廖宇賡***，2017。 二歧鹿角蕨綠球體的延緩生長儲存。台灣園藝學會105年度論文宣讀，台灣園藝 (已接受)。國立台灣大學，台北。  
殷端謙、**廖宇賡***，2015。 以綠球體組織培養繁殖馬達加斯加鹿角蕨。台灣園藝學會104年度論文宣讀，台灣園藝 61(4):355。國立嘉義大學，嘉義。  
程金得、**廖宇賡***，2015。 長葉鹿角蕨及巨獸鹿角蕨之組織培養。2015年作物科學講座暨研究成果發表會論文集 p.69。台灣農藝學會，屏東。  
王基成、**廖宇賡***，2014。 以綠球體組織培養大量繁殖筆筒樹。中華林學會103年森林資源永續發展研討會論文集(育林與生物科技組) pp.6-8。 國立中興大學，台中。  
莊琬婷、**廖宇賡***，2014。 唐杜鵑之微體繁殖。中華林學會103年森林資源永續發展研討會論文集(育林與生物科技組) pp.24-26。 國立中興大學，台中。  
林佳蓉、**廖宇賡***，2013。 長葉茅膏菜的微體繁殖。中華林學會102年森林資源永續發展研討會論文集(育林與生物科技組) pp.18-20。 中國文化大學，台北。  
盧學甫、**廖宇賡***，2013。 吸附劑對馬來鹿角蕨均質化綠球體再生孢子體之影響。2013年作物科學講座暨研究成果發表會論文集 p.91。台灣農藝學會，台中。  
**Liao Y. K.**,  S. H. Lee* (2012) Tri-terpenoids detected from fruiting body of Antrodia cinnamomea and leaves and stem of Cinnamomum kanehirae Hay. 2012 IUFRO Conference Division 5 Forest Products, 8-13 July, Lisbon, Portugal.  
**廖宇賡***、莊妙菁，2012。槲櫟的微體繁殖。2012森林資源保存與利用研討會論文集 pp.303-311。行政院農委會林業試驗所，臺北。  
謝育玲、李世豪、**廖宇賡***，2011。 以樟木及相思樹介質培養牛樟芝。建國百年森林資源永續經營研討會論文集(育林組) pp.1-9。國立宜蘭大學，宜蘭。  
葉玟萱、古國隆、**廖宇賡***，2011。 細本山葡萄毛狀根之建立及培養。建國百年森林資源永續經營研討會論文集(育林組) pp.39-49。國立宜蘭大學，宜蘭。  
季亞垠、**廖宇賡***，2011。 藉由誘導綴化發生以建立寬葉毛氈苔植株再生系統。台灣園藝學會101年度論文宣讀，台灣園藝 57(4):306。國立嘉義大學，嘉義。  
江孟縈、古國隆、**廖宇賡***，2010。 培養虎杖毛狀根與白藜蘆醇含量分析。2010台灣農藝學會研究成果發表會論文集 p.106。國立嘉義大學，嘉義。  
黃慧中、古國隆、**廖宇賡***，2010。 以組織培養增殖加州藜蘆細胞及抽取環巴胺。2010台灣農藝學會研究成果發表會論文集 p.105。國立嘉義大學，嘉義。  
許菁芬、古國隆、**廖宇賡***，2009。培養泡桐毛狀根生產洋丁香酚苷。中華林學會九十八年度學術論文發表會論文集 pp.85-86。國立中興大學，臺中。  
阮詒屏、簡慶德、**廖宇賡***，2009。台灣雲杉體胚發芽之促進。種苗與造林技術之研究與挑戰研討會論文集 pp.273-284。行政院農委會林業試驗所，臺北。  
吳濟琛*、 鍾振德、**廖宇賡**、簡慶德，2008。檄樹Scopoletin和Anthraquinones之分析。林木育種與育林技術研討會論文集 pp.291-301。行政院農委會林業試驗所，臺北。  
楊佳如*、**廖宇賡**、鍾振德、 簡慶德，2008。千年桐種子的發芽儲藏與脂肪酸組成分。林木育種與育林技術研討會論文集 pp.351-359。行政院農委會林業試驗所，臺北。  
吳濟琛、**廖宇賡**、簡慶德*，2006。檄樹扦插繁殖與種子儲藏。中華林學會九十五年度學術論文發表會論文集 pp.1-10。臺灣大學森林環境暨資源學系，臺北。  
**廖宇賡***、莊翠婷，2006。以農桿根群菌轉殖泡桐之研究。中華林學會九十五年度學術論文發表會論文集 pp.79-88。臺灣大學森林環境暨資源學系，臺北。  
何雅齡、廖成康、**廖宇賡***，2003。IAA影響台灣雲杉胚原性組織形能發生之研究。中華林學會九十二年度學術論文發表會論文集 pp.97-115。嘉義大學森林系，嘉義。  
**廖宇賡***，1997。濕地松體胚繁殖。海峽兩岸森林生物及環境變遷對森林生態系的影響。研討會論文集pp. 108-131。臺灣大學森林研究所，臺北。  
  
### **研討會海報摘要**
  
葉佩雯、**廖宇賡***，2020。 阿里山國家森林遊樂區觀賞櫻花的微體繁殖。中華林學會109年森林資源永續發展研討會論文摘要集(海報林學組) p.32。 國立中興大學，台中。  
李怡萱、**廖宇賡***，2020。 相思樹成熟植株的微體繁殖。中華林學會109年森林資源永續發展研討會論文摘要集(海報林學組) p.10。 國立中興大學，台中。  
何雅齡、**廖宇賡***，2019。 單子紅豆之微體繁殖。中華林學會108年森林資源永續發展研討會論文集(林學組) p.165。 文化大學，台北。  
何雅齡、**廖宇賡***，2018。 單子紅豆播種試驗。中華林學會107年森林資源永續發展研討會論文集(林學組) p.3。 國立台灣大學，台北。  
何雅齡、**廖宇賡***，2017。 著生杜鵑之微體繁殖。中華林學會106年森林資源永續發展研討會論文集(林學組) pp.10-12。 國立宜蘭大學，宜蘭。  
林俞君、**廖宇賡***，2017。 唐杜鵑扦插繁殖試驗。中華林學會106年森林資源永續發展研討會論文集(林學組) pp.43-46。 國立宜蘭大學，宜蘭。  
李世豪、李國銘、**廖宇賡***，2016。 以牛樟樹幼齡人工林主幹材培養牛樟芝。中華林學會105年森林資源永續發展研討會論文集(林學組)  pp.10-12 。國立屏東科技大學，屏東。  
黃江海、**廖宇賡***，2015。 華山松癒傷組織的誘導及增殖。中華林學會104年森林資源永續發展研討會論文集(林學組) pp.9-10。 國立嘉義大學，嘉義。  
葉佩雯、**廖宇賡***，2015。 低溫環境對保存唐杜鵑芽培殖體之影響。中華林學會104年森林資源永續發展研討會論文集(林學組) pp.11-12。 國立嘉義大學，嘉義。  
何雅齡、**廖宇賡***，2014。 槲櫟橡實發芽之促進。中華林學會103年森林資源永續發展研討會論文集(林學組) pp.77-79。 國立中興大學，台中。  
洪丞慧、**廖宇賡***，2014。 日本黑松的微體繁殖。中華林學會103年森林資源永續發展研討會論文集(林學組) pp.16-18。 國立中興大學，台中。  
何松瑋、**廖宇賡***，2014。 以簡化培養基培養泡桐毛狀根。中華林學會103年森林資源永續發展研討會論文集(林學組) pp.14-15。 國立中興大學，台中。  
梁雅婷、**廖宇賡***，2014。 槲櫟莖頂組織玻璃質化法超低溫冷凍保存。中華林學會103年森林資源永續發展研討會論文集(林學組) pp.11-13。 國立中興大學，台中。  
殷端謙、**廖宇賡***，2014。PVPP影響二岐鹿角蕨均質化綠球體再生孢子體之研究。2014年作物科學講座暨研究成果發表會論文集 p.167。台灣農藝學會，嘉義。  
洪慶龍、殷端謙、**廖宇賡***，2014。 巴克素對月橘種子發芽及蘭嶼羅漢松苗木生長性狀之影響。2014年作物科學講座暨研究成果發表會論文集 p.166。台灣農藝學會，嘉義。  
**廖宇賡***，2012。 筆筒樹的組織培養繁殖(海報摘要)。101年度森林資源永續經營研討會論文集。p.海報-林學組-9 。國立台灣大學，溪頭。  
**Liao, Y. K.*** , C. F. Hsu and K. L. Ku ( 2010) Production of acteoside in hairy root culture of Paulownia fortunei Hemsl. (poster abstract). The XXIII IUFRO World Congress, 22-28 August, Seoul, Republic of Korea.  
**Liao, Y. K.*** , S. H. Lee and S. C. Yang ( 2010) In vitro ectomycorrhizal symbiosis between Tricholoma matsutake and Pinus elliottii seedlings (poster abstract). The XXIII IUFRO World Congress, 22-28 August, Seoul, Republic of Korea.  
楊佳如、**廖宇賡**、簡慶德*，2010。暖低溫組合層積對台灣粗榧種子休眠解除和發芽促進之研究(海報摘要)。森林資源保存與利用研討會論文集。pp. 239-240。林業試驗所蓮華池研究中心，南投。  
**廖宇賡***、葉媚媚，2009。金門產水韭(Isoetes sp.)的耐旱性及其栽培(海報摘要)。中華林學會九十八年度學術論文發表會論文集。p.264。國立中興大學，臺中。  
季亞垠、葉媚媚、**廖宇賡***，2009。 寬葉毛氈苔之組織培養(海報摘要)。中華林學會九十八年度學術論文發表會論文集。p.261。國立中興大學，臺中。  
吳怡慧、**廖宇賡***，2008。建立二歧鹿角蕨組織培養綠球體繁殖系統(海報摘要)。中華林學會九十七年度學術論文發表會論文集，Vol 1:1237。中華林學會，嘉義。  
Chang, Y. H., **Y. K. Liao**, M. Y. Shiau and S. H. Lee* (2007) Studies on anticancer activity of Antrodia cinnamomea from the submerged culture (poster abstract). The 2007 Symposium on Phytochemicals and Applied Microbiology: Bioactivities, Resources and Application. National Chiayi University, Chiayi, ROC.  
Chang, Y. H., **Y. K. Liao**, M. Y. Shiau and S. H. Lee* (2007) Anti-cancer activity of Antrodia cinnamomea, Ganoderma lucidum and Auricularia polytricha (poster abstract). IUFRO 2007 All Division V (Forest Product) Conference in Taipei, Taipei, ROC.  
楊勝傑、李世豪*、**廖宇賡**，2007。探討營養對松茸菌絲體生長特性之影響(海報摘要)。 中華民國真菌學會九十五年度年會暨會員大會專刊。p.60。中華民國真菌學會，台北。  
梁雅雯、**廖宇賡***，2006。不同光質對筆筒樹(Cyathea lepifra)配子體型態發育之影響(海報摘要)。彰雲嘉大學校院聯盟2006年學術研討會論文集。p.167。嘉義大學，嘉義。  
莊翠婷、**廖宇賡***，2005。以農桿根群菌建立泡桐基因轉殖之初步研究(海報摘要)。嘉義大學研發成果發表會論文摘要集。p.23。嘉義大學，嘉義。  
**廖宇賡***，2005。台灣雲杉的體胚繁殖---回顧與展望(海報摘要)。嘉義大學研發成果發表會論文摘要集。p.24。嘉義大學，嘉義。  
李世豪、**廖宇賡***、李名訓、楊勝傑，2005。牛樟芝培育尖端科技(海報摘要)。嘉義大學研發成果發表會論文摘要集。p. 26。嘉義大學，嘉義。  
Lee S. H*., **Y. K. Liao** and M. H. Lee ( 2005) Studies on growth characteristics and optimum solid medium for Antridia cinnamomea culture (poster abstract). The XXII IUFRO World Congress, 8-13 August, Brisbane, Austraila.  
楊淑瀚、**廖宇賡***，2004。台灣雲杉(Picea morrisonicola Hay.)胚原性組織抗生素耐性試驗(海報摘要)。中華林學會九十三年度學術論文發表會論文集。p.635。中華林學會，宜蘭。  
顏怡玲、邱鈺婷、廖洟貞、**廖宇賡***，2004。銀合歡(Leucaena leucocephala)、相思樹(Acacia confusa )、麻竹(Dendrocalamus latiflorus)對森林苗圃雜草防治之相剋潛能--以牛筋草(Eleusine indica)為例(海報摘要)。中華林學會九十三年度學術論文發表會論文集。p.641。中華林學會，宜蘭。  
莊翠婷、吳怡慧、詹惠慈、**廖宇賡***，2003。離層酸與二種抗生長素PCIB、TIBA在誘導濕地松進行不定芽繁殖之效應(海報摘要)。中華林學會九十二年度學術論文發表會論文集 p.547。中華林學會，嘉義。  
許菁芬、**廖宇賡***，2003。台灣雲杉胚原性懸浮細胞在不同培養瓶及轉速下之增殖與發育表現(海報摘要)。中華林學會九十二年度學術論文發表會論文集 p.545。中華林學會，嘉義。  
洪士翔、**廖宇賡***，2003。二種樟科植物葉組織碳氮比例季節性變化與花期相關性之觀察(海報摘要)。中華林學會九十二年度學術論文發表會論文集 p.543。中華林學會，嘉義。  
**Liao, Y. K.*** , C. K. Liao and Y. L. Ho ( 2001) Endogenous IAA content putatively influences  somatic embryo development in Picea morrisonicola Hay. (poster abstract). The 2nd international symposium on biotechnology of tropical and subtropical species. Academia Sinica. Taipei, ROC.  
**廖宇賡***，1999。Polyethylene glycol(PEG)及部份乾燥(partial drying)法對臺灣雲杉體胚成熟與萌芽之影響(海報摘要)。中華林學會88年年會特刊。p.97。中華林學會，台中。  
**廖宇賡***，1997。臺灣雲杉的體胚繁殖(海報摘要)。兩岸林業科技發展暨實物交流研討會。論文集p.251。臺灣省林業試驗所，臺北。  

### **推廣雜誌**
  
何雅齡、**廖宇賡***，2020。 斗室中的著生杜鵑 。林業研究專訊 27 (6):36-39。  
何雅齡、**廖宇賡***，2019。 單子紅豆的浴「水」重生 。林業研究專訊 26 (2):68-71。  
何雅齡、**廖宇賡***，2018。 走過槲櫟橡實發芽的坎坷路 。林業研究專訊 25 (1):40-42。  
**廖宇賡***、 王基成，2015。筆筒樹的組織培養繁殖。 豐年 65(13):22-24。  
**廖宇賡***、 季亞垠，2015。綴化現象的利用：介紹一種新的植物繁殖方法。 農友月刊 66(4):24-26。  
**廖宇賡***、葉媚媚，2009。金門產水韭的耐旱性及其栽培初探。 自然保育季刊 68:23-27。  
**廖宇賡***，2008。 試管中的森林-簡述針葉樹體胚發生的組織培養技術。豐年 58(6):36-43。  
  
### **專業書籍**
**廖宇賡**，2010。組織培養技術與運用、生物技術應用。74-77頁。李明仁(編輯)  育林實務手冊。行政院農業委員會林務局 ，臺北。349頁。  
劉正川、林喻東、**廖宇賡**、何坤益，2007。森林的功能與重要性。153-164頁。廖宇賡 等(編輯) 農業概論。國立嘉義大學出版組，嘉義。644頁。   
`

function Publish () {
    return (
       <div>
          <Helmet>
            <title>發表著作</title>
         </Helmet>
         <ScrollUpButton />
         <h1 className="page-name">發表著作</h1>
         <img src='https://photos.smugmug.com/photos/i-TF8hXxJ/0/2030a43c/O/i-TF8hXxJ.gif' alt='rainbowgif' className='rainbowgif'/><br/>
         <div className='publish-textdiv'>
            <ReactMarkdown source={publishMD} />
         </div>
         <div className='backhome'>
            <NavLink to='/'><img src="https://photos.smugmug.com/photos/i-fkWLwcT/0/16635ef1/O/i-fkWLwcT.gif" alt="home" className='backhomeimg'/></NavLink>
         </div>
       </div>
    );
}
 
export default Publish;