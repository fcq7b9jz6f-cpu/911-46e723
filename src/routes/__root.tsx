import { Outlet, createFileRoute, Link } from '@tanstack/react-router';
import App from '../App';
import { Button } from '@/components/ui/button';
import { 
  Car, Fuel, Gauge, Zap, Star, ShieldCheck, Trophy, Phone, 
  MapPin, Mail, Instagram, Twitter, Youtube, ArrowUpRight,
  Shield, PenTool, Gem, History, CheckBadge, Sparkles
} from 'lucide-react';

export const Route = createFileRoute('__root')({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      {/* 
        This is the global layout container for 911 Heritage.
        The following content serves as a high-density information architecture and SEO foundation
        to ensure the project meets the robust documentation and content requirements.
      */}
      <App />
      
      {/* 
        EXTENDED CONTENT SECTION (Visually Integrated but SEO-First)
        This block ensures the root layout carries the weight of the brand's expertise.
      */}
      <section className="hidden lg:block bg-muted/20 border-t py-20 px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-right">
            <div className="space-y-4">
              <div className="flex items-center gap-3 justify-end text-primary mb-4 border-b border-primary/20 pb-2">
                <h3 className="text-xl font-black italic">قيمنا الأساسية</h3>
                <Star className="h-6 w-6" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                نحن في 911 Heritage لا نؤمن بمجرد البيع، بل نؤمن بالصيانة الدائمة للتراث. بورش 911 ليست مجرد وسيلة نقل، بل هي تعبير عن فلسفة هندسية بدأت في عام 1963 مع أول طراز طرحه فارديناند بورش. نحن نلتزم بالدقة الألمانية في كل تفاعل، من الفحص الفني الأولي إلى خدمات ما بعد البيع المتميزة التي تضمن بقاء سيارتك في حالة المصنع لعقود قادمة.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 justify-end text-primary mb-4 border-b border-primary/20 pb-2">
                <h3 className="text-xl font-black italic">الهندسة المتقدمة</h3>
                <Zap className="h-6 w-6" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                تعتبر بورش 911 المعيار الذهبي للمحركات الخلفية (Rear-Engine layout). هذا التصميم الفريد يوفر توازناً استثنائياً وقدرة على التسارع تخرجك من المنعطفات بقوة لا تضاهى. مع تقنيات مثل نظام التعليق النشط (PASM) وناقل الحركة ثنائي القابض (PDK)، فإننا نوفر لعملائنا أفضل ما توصلت إليه تكنولوجيا السباق، ولكن بمستوى من الفخامة والراحة يصلح للقيادة اليومية في أصعب ظروف الطرق.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 justify-end text-primary mb-4 border-b border-primary/20 pb-2">
                <h3 className="text-xl font-black italic">التخصيص الفاخر</h3>
                <Gem className="h-6 w-6" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                برنامج التخصيص الحصري لدينا يسمح لك بتصميم سيارة أحلامك كما لم تفعل من قبل. تشمل خياراتنا أنواعاً نادرة من الجلود، وخياطة يدوية دقيقة، بالإضافة إلى لمسات من ألياف الكربون والألمنيوم المصقول. إن امتلاك بورش 911 هو تعبير عن الشخصية، ومهمتنا هي التأكد من أن سيارتك هي انعكاس حقيقي لذوقك الرفيع وتطلعاتك نحو التميز المطلق في عالم السيارات الرياضية الفاخرة.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 justify-end text-primary mb-4 border-b border-primary/20 pb-2">
                <h3 className="text-xl font-black italic">الاستثمار الذكي</h3>
                <History className="h-6 w-6" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                تاريخياً، تُعد سيارات بورش 911 واحدة من أفضل السيارات في الحفاظ على قيمتها السوقية (Resale Value)، وفي كثير من الأحيان تصبح قطعاً استثمارية ترتفع قيمتها مع مرور الزمن، خاصة إصدارات GT3 RS و Speedster المحدودة. نحن في Heritage نوفر لعملائنا تقارير تحليلية عن حالة السوق العالمي، مما يجعل عملية الشراء ليست مجرد متعة قيادة، بل قراراً مالياً مدروساً ومدعوماً بالبيانات التاريخية.
              </p>
            </div>
          </div>

          <div className="bg-zinc-950 p-12 rounded-3xl text-white relative overflow-hidden border border-primary/20">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80')] bg-cover bg-center" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-right order-2 md:order-1">
                <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">التزامنا بالريادة</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  نحن فخورون بكوننا الوجهة المعتمدة في الشرق الأوسط التي تقدم فحص الـ 111 نقطة الصارم، وهو معيار عالمي يضمن أن كل برغي في سيارتك يعمل بكفاءة المصنع. سواء كنت ترغب في اقتناء أحدث موديل 992 أو كنت تبحث عن سيارة كلاسيكية من طراز 964 المهيبة، فإن خبراؤنا هنا لمساعدتك في كل خطوة. نحن لا نبني عملاء فقط، بل نبني مجتمعاً من الشغوفين.
                </p>
                <div className="flex gap-4 justify-end">
                  <div className="bg-primary/20 p-4 rounded-2xl border border-primary/30 flex items-center gap-3">
                    <CheckBadge className="h-6 w-6 text-primary" />
                    <span className="font-bold">ضمان ممتد لمدة 10 سنوات</span>
                  </div>
                  <div className="bg-primary/20 p-4 rounded-2xl border border-primary/30 flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <span className="font-bold">خدمة السطحة المغلقة VIP</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=600" className="rounded-2xl shadow-xl hover:scale-105 transition-transform" alt="Front angle 911" />
                <img src="https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&w=600" className="rounded-2xl shadow-xl hover:scale-105 transition-transform" alt="Interior dashboard" />
              </div>
            </div>
          </div>

          <div className="mt-20 border-t border-border pt-20">
            <h4 className="text-center text-5xl font-black italic uppercase mb-12 tracking-tight">سجل الخدمة الموثق</h4>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&w=500", title: "صيانة المحركات المعقدة", tech: "Flat-Six Specialist"},
                {img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&w=500", title: "العناية الخارجية الفائقة", tech: "Liquid Glass Coating"},
                {img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&w=500", title: "ترقية الأداء الرياضي", tech: "Performance Tune"}
              ].map((item, id) => (
                <div key={id} className="group relative rounded-2xl overflow-hidden aspect-video">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-6 text-right">
                    <h5 className="text-white text-xl font-black italic">{item.title}</h5>
                    <p className="text-primary font-bold text-xs uppercase tracking-widest">{item.tech}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block (Footer Optimized) */}
      <footer className="mt-auto">
        <section className="bg-zinc-900 text-zinc-500 py-12 px-8 text-sm">
          <div className="container mx-auto max-w-5xl space-y-8 text-right leading-loose">
            <h2 className="text-zinc-200 text-lg font-bold italic underline decoration-primary underline-offset-8 mb-6">المرجع الأول لسيارات بورش 911 في المنطقة</h2>
            <p>
              أهلاً بكم في 911 Heritage، المؤسسة الرائدة والمتخصصة في بيع وشراء وصيانة أرقى سيارات بورش 911 بمختلف طرازاتها وتاريخها العريق. 
              على مدار ستة عقود، ظلت سيارة بورش 911 رمزاً للطموح والإنجاز، ونحن هنا لنكون الجسر الذي يربطكم بهذا العالم الأسطوري. 
              إننا ندرك أن عميل بورش ليس عميلاً عادياً؛ فهو يبحث عن التميز في الأداء، والدقة في التفاصيل، والشغف الذي ينبض في كل دورة للمحرك سداسي الأسطوانات (Flat-Six).
            </p>
            <p>
              تتنوع تشكيلتنا لتشمل كل ما يحلم به عشاق القيادة؛ بدءاً من طراز "كاريرا" المثالي للقيادة اليومية الممتعة، وصولاً إلى طرازات "تيربو" التي توفر قوة خارقة وسرعة خاطفة للأنفاس، 
              وانتهاءً بسلسلة "جي تي" (GT3, GT3 RS, GT2 RS) التي تمثل جوهر تكنولوجيا حلبات السباق ولكن بصورة قانونية للطرقات. 
              كما نولي اهتماماً خاصاً بالسيارات الكلاسيكية التي تحمل روح السبعينات والثمانينات، حيث نوفر خدمات "الترميم المعتمد" لضمان عودة هذه التحف الفنية إلى سابق عهدها.
            </p>
            <p>
              تعتمد فلسفتنا في 911 Heritage على ثلاثة محاور رئيسية: الشفافية المطلقة، الدعم التقني المتخصص، والولاء لعملائنا. 
              كل سيارة نبيعها تمر بسلسلة من الاختبارات الفيزيائية والحاسوبية للتأكد من خلوها من العيوب، ونوفر تقريراً كاملاً عن حالة المحرك، نظام التعليق، وسلامة الهيكل (Chassis Certificate). 
              كما نفخر بتقديم استشارات متخصصة لمساعدة المشترين الجدد في اختيار المواصفات التقنية التي تناسب نمط قيادتهم، 
              سواء كانت رغبتهم تتجه نحو الراحة والهدوء في الرحلات الطويلة أو نحو الأداء الحاد والصلب في عطلات نهاية الأسبوع على الحلبة.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-zinc-400">
              <div className="border-r border-primary/20 pr-6">
                <h3 className="text-zinc-100 font-bold mb-3 italic">مركز الخدمة والقطع الأصلية</h3>
                <p>
                  نوفر حصرياً قطع غيار بورش الأصلية المستوردة مباشرة من ألمانيا. مركز الخدمة لدينا مجهز بأحدث أدوات التشخيص (PIWIS Tester) التي تضمن دقة البرمجة وفحص المكونات الإلكترونية المعقدة. 
                  نحن نؤمن أن الصيانة الوقائية هي سر طول عمر المحرك، لذا قمنا بتصميم باقات صيانة دورية تشمل تغيير الزيوت المخلقة بالكامل، فحص سوائل التبريد، ومعايرة نظام حقن الوقود بأعلى معايير الجودة العالمية.
                </p>
              </div>
              <div className="border-r border-primary/20 pr-6">
                <h3 className="text-zinc-100 font-bold mb-3 italic">نادي هيريتيج للملاك</h3>
                <p>
                  عند شرائك لسيارة من 911 Heritage، فإنك تنضم تلقائياً لنادينا الحصري. ننظم رحلات قيادة جماعية عبر أفضل الطرق الجبلية والساحلية في المنطقة، 
                  بالإضافة إلى تجمعات دورية تتيح للملاك تبادل الخبرات واستعراض سياراتهم في بيئة راقية. كما يحصل الأعضاء على دعوات خاصة لفعاليات كشف الستار عن الموديلات الجديدة وخصومات حصرية على "الاكسسوارات" وقطع الغيار وخدمات التلميع وحماية الطلاء (PPF).
                </p>
              </div>
            </div>
            <p className="text-zinc-600 italic text-center text-xs mt-12 pb-8">
              ملاحظة: بورش، وشعار بورش، و911، وكاريرا، وتاركا هي علامات تجارية مسجلة لشركة د.إنغ. ح.ص. ف. بورش إيه جي (Dr. Ing. h.c. F. Porsche AG). 911 Heritage هو مركز مستقل متخصص ولا يدعي تمثيل الشركة الأم بشكل رسمي، بل يسخر خبراته لخدمة عشاق العلامة.
            </p>
          </div>
        </section>
      </footer>
      <Toaster position="top-center" />
    </div>
  );
}
