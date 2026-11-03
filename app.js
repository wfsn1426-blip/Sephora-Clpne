const products = [
{id:'m1',cat:'المكياج',brand:'نارس',name:'كونسيلر راديانت كريمي',price:190,rating:'4.4',count:'22 ظل',options:22,img:'makeup-nars-radiant.jpg'},
{id:'m2',cat:'المكياج',brand:'كلينيك',name:'ثنائي الشفاه كالت كلاسيك',price:175,old:246,rating:'2.6',count:'1 ظل',options:1,img:'makeup-clinique-duo.jpg',tag:'جديد'},
{id:'m3',cat:'المكياج',brand:'هدى بيوتي',name:'بودرة سائبة إيزي بيك ديو',price:219,rating:'4.4',count:'4 ظلال',options:4,img:'makeup-huda-powder.jpg',tag:'حصري'},
{id:'m4',cat:'المكياج',brand:'نارس',name:'كونسيلر سوفت مات كومبليت',price:170,rating:'4.5',count:'23 ظل',options:23,img:'makeup-nars-soft.jpg'},
{id:'m5',cat:'المكياج',brand:'دولتشي اند غابانا',name:'كريم الأساس البودرة إنفرا لاستر',price:256,rating:'4.0',count:'6 ظلال',options:6,img:'makeup-dg-powder.jpg',tag:'جديد'},
{id:'m6',cat:'المكياج',brand:'ماك',name:'قلم تصفيف الحواجب فيل أند شيد',price:105,rating:null,count:'4 ظلال',options:4,img:'makeup-mac-brow.jpg',tag:'جديد'},
{id:'m7',cat:'المكياج',brand:'دولتشي اند غابانا',name:'ميك إت دابل',price:199,rating:'4.6',count:'6 ظلال',options:6,img:'makeup-dg-lip.jpg',tag:'جديد'},
{id:'m8',cat:'المكياج',brand:'كلينيك',name:'مجموعة زيت الشفاه والخدود الثلاثية',price:365,old:521,rating:null,count:'1 ظل',options:1,img:'makeup-clinique-lipset.jpg',tag:'جديد'},
{id:'m9',cat:'المكياج',brand:'دولتشي اند غابانا',name:'مجموعة هدايا المكياج بوب آند جلو',price:326,old:466,rating:null,count:'1 ظل',options:1,img:'makeup-dg-gift.jpg',tag:'أونلاين فقط'},
{id:'m10',cat:'المكياج',brand:'ميلك ميك أب',name:'قلم أحمر الخدود والشفاه الكريمي',price:125,rating:'4.8',count:'8 ظلال',options:8,img:'makeup-milk-blush.jpg',tag:'حصري'},

{id:'f1',cat:'العطور',brand:'ميمو',name:'أودون سيغنتشر دويت أو دو بارفان',price:1770,old:2269,rating:null,count:'1 حجم',options:1,img:'perfume-memo.jpg',tag:'جديد'},
{id:'f2',cat:'العطور',brand:'جان بول غوتييه',name:'ماء عطر لا فافوريت',price:555,rating:'5.0',count:'1 حجم',options:1,img:'perfume-gaultier.jpg',tag:'حصري'},
{id:'f3',cat:'العطور',brand:'كارولينا هيريرا',name:'مجموعة جود جيرل بلاش أو دو بارفان',price:780,old:1114,rating:'4.6',count:'1 حجم',options:1,img:'perfume-carolina.jpg',tag:'جديد'},
{id:'f4',cat:'العطور',brand:'كيليان',name:'بينا بارايسو – ماء عطر',price:671,rating:'3.8',count:'1 حجم',options:1,img:'perfume-kilian-pina.jpg',tag:'جديد'},
{id:'f5',cat:'العطور',brand:'توم فورد',name:'مجموعة أومبري ليذر من ماء العطر',price:960,old:1371,rating:null,count:'1 حجم',options:1,img:'perfume-tomford.jpg',tag:'جديد'},
{id:'f6',cat:'العطور',brand:'ميو ميو',name:'ميوتين إنتنس',price:668,rating:'4.7',count:'3 أحجام',options:3,img:'perfume-miumiu.jpg',tag:'جديد'},
{id:'f7',cat:'العطور',brand:'كيليان',name:'سباركلينغ رويال – ماء عطر',price:671,rating:'4.4',count:'1 حجم',options:1,img:'perfume-kilian-royal.jpg',tag:'جديد'},
{id:'f8',cat:'العطور',brand:'بنهالغنز',name:'ذا تراديجي أوف لورد جورج – ماء عطر',price:1745,rating:null,count:'1 حجم',options:1,img:'perfume-penhaligon.jpg',tag:'جديد'},
{id:'f9',cat:'العطور',brand:'كيليان',name:'ميدنايت إسبريسو – ماء عطر',price:671,rating:'4.6',count:'1 حجم',options:1,img:'perfume-kilian-midnight.jpg',tag:'جديد'},
{id:'f10',cat:'العطور',brand:'نارسيسو رودريغز',name:'فور هير بيور مسك – مجموعة ماء عطر',price:null,rating:null,count:'أحجام متعددة',options:1,img:'perfume-narciso-set.jpg',tag:'جديد'},

{id:'s1',cat:'العناية بالبشرة',brand:'أنوا',name:'مجموعة الروتين اليومي الأكثر مبيعًا',price:245,old:377,rating:'5.0',count:'1 حجم',options:1,img:'skin-anua.jpg',tag:'جديد'},
{id:'s2',cat:'العناية بالبشرة',brand:'ذا أورديناري',name:'مجموعة العناية بالبشرة الحساسة',price:107,old:155,rating:'4.0',count:'1 حجم',options:1,img:'skin-ordinary.jpg',tag:'جديد'},
{id:'s3',cat:'العناية بالبشرة',brand:'كلينيك',name:'مجموعة العناية بالبشرة للترطيب الشامل',price:255,old:413,rating:null,count:'1 حجم',options:1,img:'skin-clinique-moisture.jpg',tag:'جديد'},
{id:'s4',cat:'العناية بالبشرة',brand:'بوبي براون',name:'كريم أساس للوجه غني بالفيتامينات+',price:112,rating:'4.7',count:'2 أحجام',options:2,img:'skin-bobbi.jpg'},
{id:'s5',cat:'العناية بالبشرة',brand:'كلينيك',name:'مجموعة غريت سكين إنفري وير',price:569,old:809,rating:null,count:'1 حجم',options:1,img:'skin-clinique-routine.jpg',tag:'جديد'},
{id:'s6',cat:'العناية بالبشرة',brand:'جلو ريسبي',name:'مجموعة تونر باد للعناية بالبشرة',price:85,rating:'4.1',count:'1 حجم',options:1,img:'skin-glowrecipe.jpg'},

{id:'h1',cat:'العناية بالشعر',brand:'كيه 18',name:'إصلاح الشعر المتضرر',price:251,rating:'4.0',count:'1 حجم',options:1,img:'hair-k18-repair.jpg'},
{id:'h2',cat:'العناية بالشعر',brand:'أوربي',name:'شامبو جاف Gold Lust',price:251,rating:'4.4',count:'2 أحجام',options:2,img:'hair-oribe-dry.jpg'},
{id:'h3',cat:'العناية بالشعر',brand:'غيسو',name:'معطر الشعر الغني بالعسل – فانيلا جليز',price:205,rating:'3.0',count:'1 حجم',options:1,img:'hair-gisou.jpg'},
{id:'h4',cat:'العناية بالشعر',brand:'كيراستاس',name:'مجموعة روتين العناية الليلية بالشعر',price:378,old:473,rating:'4.7',count:'1 حجم',options:1,img:'hair-kerastase.jpg',tag:'جديد'},
{id:'h5',cat:'العناية بالشعر',brand:'أداة تصفيف',name:'أداة تصفيف الشعر',price:null,rating:null,count:'—',options:1,img:'hair-tool.jpg',tag:'جديد'},
{id:'h6',cat:'العناية بالشعر',brand:'كيه 18',name:'مجموعة عناية K18',price:null,rating:null,count:'1 حجم',options:1,img:'hair-k18-set.jpg',tag:'جديد'}
];

const grid=document.getElementById('productGrid');
const title=document.getElementById('sectionTitle');
const count=document.getElementById('resultCount');

let activeCategory='الكل';
let activeFilter='الكل';
let searchTerm='';
let sort='featured';
let selectedProduct=null;
let selectedOption=null;
let cart=[];
let wish=new Set();

const money=n=>n==null?'السعر غير ظاهر':`${n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})} ر.س`;

function filtered(){
  let list=products.filter(p=>
    (activeCategory==='الكل'||p.cat===activeCategory)&&
    (activeFilter==='الكل'||(activeFilter==='الأكثر مبيعاً'?['m1','s1','f2'].includes(p.id):p.tag===activeFilter))&&
    (`${p.brand} ${p.name} ${p.cat}`).toLowerCase().includes(searchTerm.toLowerCase())
  );
  if(sort==='low')list.sort((a,b)=>(a.price??Infinity)-(b.price??Infinity));
  if(sort==='high')list.sort((a,b)=>(b.price??-Infinity)-(a.price??-Infinity));
  return list;
}

function render(){
  let list=filtered();
  grid.innerHTML=list.map(p=>`
    <article class="product-card" data-id="${p.id}">
      <div class="product-photo">
        <img src="assets/${p.img}" alt="${p.brand} ${p.name}" loading="lazy">
        <button class="heart ${wish.has(p.id)?'on':''}" data-wish="${p.id}" aria-label="المفضلة">${wish.has(p.id)?'♥️':'♡'}</button>
        ${p.tag?`<span class="ribbon">${p.tag}</span>`:''}
      </div>
      <div class="product-info">
        <span class="product-brand">${p.brand}</span>
        <span class="product-name">${p.name}</span>
        <div class="rating">${p.rating?`<span class="stars">★★★★★</span> ${p.rating}`:'<span style="color:#999">☆ لا توجد تقييمات بعد</span>'}</div>
        <span class="muted-line">${p.count||''}</span>
        <div class="price-row">
          <strong class="price">${money(p.price)}</strong>
          ${p.old?`<span class="old-price">${money(p.old)}</span>`:''}
        </div>
      </div>
    </article>
  `).join('');

  title.textContent=activeCategory==='الكل'?'تسوقي كل المنتجات':activeCategory;
  count.textContent=`${list.length} منتجًا من الأقسام المختارة`;
}

function toast(t){
  let el=document.getElementById('toast');
  el.textContent=t;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),1800);
}

function openProduct(id){
  let p=products.find(x=>x.id===id);
  if(!p)return;

  selectedProduct=p;
  selectedOption=null;

  document.getElementById('modalImage').src='assets/'+p.img;
  document.getElementById('modalBrand').textContent=p.brand;
  document.getElementById('modalName').textContent=p.name;
  document.getElementById('modalRating').textContent=p.rating?`★★★★★  ${p.rating}`:'لا توجد تقييمات بعد';
  document.getElementById('modalPrice').textContent=money(p.price);
  document.getElementById('modalOld').textContent=p.old?money(p.old):'';

  let label=p.cat==='العطور'?'اختاري الحجم':p.cat==='العناية بالشعر'?'اختاري الحجم':'اختاري الدرجة';
  document.getElementById('optionLabel').textContent=label;

  let box=document.getElementById('shadeOptions');
  box.innerHTML='';

  let n=Math.max(1,Math.min(p.options||1,23));

  for(let i=1;i<=n;i++){
    let b=document.createElement('button');
    b.className='shade';
    b.textContent=n===1?
      (p.cat==='العطور'||p.cat==='العناية بالشعر'||p.cat==='العناية بالبشرة'?'الحجم المتاح':'الدرجة المتاحة'):
      `${p.cat==='العطور'||p.cat==='العناية بالشعر'?'حجم':'درجة'} ${String(i).padStart(2,'0')}`;

    b.onclick=()=>{
      selectedOption=b.textContent;
      box.querySelectorAll('.shade').forEach(x=>x.classList.remove('selected'));
      b.classList.add('selected');
    };

    box.appendChild(b);
  }

  document.getElementById('modalBackdrop').classList.add('open');
}

function openDrawer(type){
  let isWish=type==='wish';
  document.getElementById('drawerTitle').textContent=isWish?'قائمة المفضلة':'سلة التسوق';

  let items=isWish?
    [...wish].map(id=>products.find(p=>p.id===id)).filter(Boolean):
    cart;

  let el=document.getElementById('drawerContent');

  el.innerHTML=items.length?items.map((p,i)=>`
    <div class="drawer-item">
      <img src="assets/${p.img}">
      <div>
        <strong>${p.brand} – ${p.name}</strong>
        <small>${money(p.price)} ${p.option?`· ${p.option}`:''}</small>
      </div>
      ${isWish?`<button data-remove-wish="${p.id}">حذف</button>`:`<button data-remove-cart="${i}">×</button>`}
    </div>
  `).join(''):'<p class="empty">لا توجد منتجات هنا حتى الآن.</p>';

  let total=cart.reduce((a,p)=>a+(p.price||0),0);
  document.getElementById('drawerTotal').textContent=isWish?'':`الإجمالي: ${money(total)}`;
  document.getElementById('drawerBackdrop').classList.add('open');
}

function updateCounts(){
  document.getElementById('cartCount').textContent=cart.length;
  document.getElementById('wishCount').textContent=wish.size;
}

grid.addEventListener('click',e=>{
  let heart=e.target.closest('[data-wish]');
  if(heart){
    e.stopPropagation();
    let id=heart.dataset.wish;
    wish.has(id)?wish.delete(id):wish.add(id);
    updateCounts();
    render();
    return;
  }

  let card=e.target.closest('.product-card');
  if(card)openProduct(card.dataset.id);
});

document.querySelectorAll('[data-category]').forEach(b=>b.addEventListener('click',()=>{
  activeCategory=b.dataset.category;
  document.querySelectorAll('[data-category]').forEach(x=>x.classList.toggle('selected',x===b));
  document.querySelectorAll('.main-nav a').forEach(x=>x.classList.toggle('active',x.dataset.cat===activeCategory));
  activeFilter='الكل';
  document.querySelectorAll('.chip').forEach(x=>x.classList.toggle('active',x.dataset.filter==='الكل'));
  render();
  document.getElementById('shop').scrollIntoView({behavior:'smooth'});
}));

document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>{
  activeCategory=a.dataset.cat;
  document.querySelectorAll('[data-category]').forEach(x=>x.classList.toggle('selected',x.dataset.category===activeCategory));
  render();
  document.getElementById('mainNav').classList.remove('open');
}));

document.querySelectorAll('.chip').forEach(b=>b.addEventListener('click',()=>{
  activeFilter=b.dataset.filter;
  document.querySelectorAll('.chip').forEach(x=>x.classList.toggle('active',x===b));
  render();
}));

document.getElementById('searchInput').addEventListener('input',e=>{
  searchTerm=e.target.value;
  render();
});

document.getElementById('sortSelect').addEventListener('change',e=>{
  sort=e.target.value;
  render();
});

document.getElementById('closeModal').onclick=()=>document.getElementById('modalBackdrop').classList.remove('open');

document.getElementById('modalBackdrop').addEventListener('click',e=>{
  if(e.target.id==='modalBackdrop')e.currentTarget.classList.remove('open');
});

document.getElementById('addCart').onclick=()=>{
  if(!selectedProduct)return;

  if((selectedProduct.options||1)>1&&!selectedOption){
    toast('اختاري الدرجة أو الحجم أولاً');
    return;
  }

  cart.push({...selectedProduct,option:selectedOption||'الخيار المتاح'});
  updateCounts();
  document.getElementById('modalBackdrop').classList.remove('open');
  toast('تمت إضافة المنتج إلى السلة');
};

document.getElementById('cartBtn').onclick=()=>openDrawer('cart');
document.getElementById('wishBtn').onclick=()=>openDrawer('wish');
document.getElementById('closeDrawer').onclick=()=>document.getElementById('drawerBackdrop').classList.remove('open');

document.getElementById('drawerBackdrop').addEventListener('click',e=>{
  if(e.target.id==='drawerBackdrop')e.currentTarget.classList.remove('open');
});

document.getElementById('drawerContent').addEventListener('click',e=>{
  let r=e.target.closest('[data-remove-cart]');
  if(r){
    cart.splice(Number(r.dataset.removeCart),1);
    updateCounts();
    openDrawer('cart');
  }

  let w=e.target.closest('[data-remove-wish]');
  if(w){
    wish.delete(w.dataset.removeWish);
    updateCounts();
    openDrawer('wish');
    render();
  }
});

document.getElementById('menuBtn').onclick=()=>document.getElementById('mainNav').classList.toggle('open');

document.getElementById('searchBtn').onclick=()=>{
  document.getElementById('searchWrap').scrollIntoView({behavior:'smooth',block:'center'});
  document.getElementById('searchInput').focus();
};

// قراءة لونية إرشادية فقط وليست تحليلًا دقيقًا للوجه أو تطابقًا مضمونًا للدرجة.
function estimateTone(file){
  let img=new Image();

  img.onload=()=>{
    let c=document.getElementById('toneCanvas');
    let ctx=c.getContext('2d');

    c.width=100;
    c.height=100;
    ctx.drawImage(img,0,0,100,100);

    let d=ctx.getImageData(20,20,60,60).data;
    let r=0,g=0,b=0,n=0;

    for(let i=0;i<d.length;i+=16){
      r+=d[i];
      g+=d[i+1];
      b+=d[i+2];
      n++;
    }

    r/=n;
    g/=n;
    b/=n;

    let tone=(r-g)>18?'دافئ مبدئيًا':(b-r)>8?'بارد مبدئيًا':'محايد أو متوازن مبدئيًا';

    document.getElementById('toneResult').textContent=
      `قراءة لونية عامة للصورة: ${tone}. هذه ليست قراءة للوجه أو تشخيصًا دقيقًا؛ جرّبي الدرجات على خط الفك في ضوء النهار قبل الشراء.`;
  };

  img.src=URL.createObjectURL(file);
}

document.getElementById('toneFile').addEventListener('change',e=>{
  if(e.target.files[0])estimateTone(e.target.files[0]);
});

let stream=null;

document.getElementById('cameraBtn').onclick=async()=>{
  let v=document.getElementById('cameraPreview');

  try{
    if(stream){
      stream.getTracks().forEach(t=>t.stop());
      stream=null;
      v.hidden=true;
      document.getElementById('cameraBtn').textContent='استخدمي الكاميرا';
      return;
    }

    stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user'}});
    v.srcObject=stream;
    v.hidden=false;
    document.getElementById('cameraBtn').textContent='إيقاف الكاميرا';
    toast('الكاميرا جاهزة؛ التقطي صورة ثم ارفعيها للتحليل الإرشادي');
  }catch(e){
    toast('تعذر تشغيل الكاميرا؛ استخدمي رفع صورة بدلًا منها');
  }
};

render();
updateCounts();
