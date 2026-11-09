const cityCenters = {
    'riyadh': [24.7136, 46.6753], 'jeddah': [21.4858, 39.1925], 'makkah': [21.3891, 39.8579], 'madinah': [24.4672, 39.6111], 'dammam': [26.4207, 50.0888], 'khobar': [26.2794, 50.2083], 'dhahran': [26.2886, 50.1140], 'taif': [21.2854, 40.4183], 'tabuk': [28.3835, 36.5662], 'abha': [18.2164, 42.5053], 'buraidah': [26.3260, 43.9750], 'hail': [27.5219, 41.6907], 'jazan': [16.8892, 42.5511], 'najran': [17.4917, 44.1322], 'jubail': [27.0046, 49.6460], 'yanbu': [24.0895, 38.0618], 'ahsa': [25.3833, 49.5833], 'arar': [30.9753, 41.0381], 'sakaka': [29.9697, 40.2064], 'bahah': [20.0129, 41.4677]
};

const neighborhoods = ['حي العليا', 'حي الملز', 'حي النخيل', 'حي الروضة', 'حي الشاطئ', 'حي الأندلس', 'حي الفيصلية', 'حي المروج', 'حي الصحافة', 'حي الياسمين'];

function generateCategoryData(names, phonePrefix) {
    let data = {};
    for (const city in cityCenters) {
        data[city] = [];
        for (let i = 0; i < 20; i++) {
            let name = names[i % names.length] + ' - ' + city;
            let address = neighborhoods[i % neighborhoods.length] + ' - ' + city;
            let lat = cityCenters[city][0] + (Math.random() - 0.5) * 0.1;
            let lng = cityCenters[city][1] + (Math.random() - 0.5) * 0.1;
            let rating = (Math.random() * 1.5 + 3.5).toFixed(1);
            let phone = phonePrefix + Math.floor(1000000 + Math.random() * 9000000).toString();
            data[city].push([name, address, lat, lng, rating, phone]);
        }
    }
    return data;
}

const customData = {
    'البنوك': generateCategoryData(['مصرف الراجحي', 'البنك الأهلي', 'بنك الرياض', 'بنك ساب', 'البنك الفرنسي', 'بنك البلاد'], '011'),
    'المخابز': generateCategoryData(['مخبز الأصيل', 'مخبز السد', 'مخبز الحرمين', 'مخبز روابي', 'مخبز الريف'], '011'),
    'مطاعم عائلية وفاخرة': generateCategoryData(['مطعم النخبة', 'ليالي الشرق', 'البحر الأحمر', 'الأصالة', 'دار الزيتون'], '011'),
    'ملابس رجالي': generateCategoryData(['الأناقة', 'الرجل الحديث', 'أزياء جدة', 'ستايل الرجل', 'أوليفر'], '011'),
    'ملابس حريمي': generateCategoryData(['بوتيك ريم', 'أزياء سارة', 'أناقة الشرق', 'لمسة فاشون', 'سناء'], '011'),
    'ملابس أطفال': generateCategoryData(['بيبي شوب', 'عالم الصغار', 'مذركير', 'أطفالنا', 'هلا كيدز'], '011'),
    'محلات الألعاب': generateCategoryData(['عالم الألعاب', 'تويز آر أص', 'ألعابي', 'مرح', 'سمارت كيدز'], '011'),
    'المكتبات والقرطاسية': generateCategoryData(['مكتبة جرير', 'العثيم', 'القرطاسية الحديثة', 'مكتبة الرياض', 'أقلام'], '011'),
    'النظارات والبصريات': generateCategoryData(['بصريات المغربي', 'النظارة', 'عيون', 'فيجن', 'أوبتيكال'], '011'),
    'مستحضرات التجميل': generateCategoryData(['عطور وعطور', 'فيسز', 'ماك', 'لوريال', 'نون بيوتي'], '011')
};
