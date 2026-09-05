const topics = [
  {
    slug: "acne",
    category: "Inflammatory",
    keywords: "pimples blackheads whiteheads cysts nodules breakouts",
    source: "https://www.aad.org/public/diseases/acne/really-acne/overview",
    en: {
      title: "Acne",
      summary: "Clogged pores and inflamed bumps that can range from blackheads and whiteheads to deeper, painful breakouts.",
      meaning: "Acne happens when hair follicles become clogged with oil and dead skin cells. Inflammation can turn those clogged pores into red bumps, pustules, nodules, or cysts. Acne is common, not contagious, and treatment can reduce breakouts and lower the chance of scarring.",
      notice: ["Blackheads or whiteheads", "Red or tender pimples", "Deeper painful bumps or cysts", "Dark marks or scars after breakouts heal"],
      treatment: ["Your dermatologist may recommend topical medicines that unclog pores or reduce inflammation", "Oral medicines may be considered for more widespread or scarring acne", "A treatment plan usually needs steady use for several weeks before the full effect is clear"],
      home: ["Wash gently twice daily and after heavy sweating", "Use non-comedogenic skin care and sunscreen", "Avoid picking or squeezing lesions", "Follow the treatment schedule even when the skin starts to improve"],
      call: ["Painful deep breakouts are increasing", "You are developing scars", "A treatment is causing severe irritation or another concerning reaction", "Acne is having a major effect on your mood or daily life"]
    },
    es: {
      title: "Acné",
      summary: "Poros tapados y lesiones inflamadas que pueden ir desde puntos negros y blancos hasta brotes profundos y dolorosos.",
      meaning: "El acné aparece cuando los folículos se tapan con grasa y células muertas. La inflamación puede producir granos, pústulas, nódulos o quistes. Es muy común, no es contagioso y el tratamiento puede disminuir los brotes y el riesgo de cicatrices.",
      notice: ["Puntos negros o puntos blancos", "Granos rojos o sensibles", "Bultos profundos y dolorosos", "Manchas oscuras o cicatrices después de los brotes"],
      treatment: ["Su dermatólogo puede recomendar medicamentos tópicos para destapar poros o bajar la inflamación", "Los medicamentos orales pueden considerarse en acné más extenso o con cicatrices", "La mejoría suele requerir uso constante durante varias semanas"],
      home: ["Lave la piel suavemente dos veces al día y después de sudar mucho", "Use productos no comedogénicos y protector solar", "Evite exprimir o manipular las lesiones", "Siga el plan incluso cuando la piel empiece a mejorar"],
      call: ["Aumentan los brotes profundos y dolorosos", "Empiezan a aparecer cicatrices", "Un tratamiento causa irritación intensa u otra reacción preocupante", "El acné está afectando mucho su estado de ánimo o vida diaria"]
    }
  },
  {
    slug: "atopic-dermatitis",
    category: "Inflammatory",
    keywords: "eczema itchy dry rash atopic dermatitis",
    source: "https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis",
    en: {
      title: "Atopic Dermatitis",
      summary: "A common type of eczema that causes dry, inflamed, itchy skin and can flare over time.",
      meaning: "Atopic dermatitis is a chronic inflammatory skin condition. The skin barrier does not hold moisture or block irritants as effectively as it should, which can lead to dryness, itch, and recurrent rashes. It is not contagious.",
      notice: ["Dry or rough skin", "Persistent itching", "Red, brown, gray, or violet areas depending on skin tone", "Thickened or cracked skin after repeated scratching"],
      treatment: ["Daily moisturization is a core part of treatment", "Your dermatologist may prescribe topical anti-inflammatory medicines", "More extensive disease may require light treatment, injections, pills, or other systemic options"],
      home: ["Use a thick fragrance-free moisturizer regularly", "Take short lukewarm showers or baths", "Choose gentle fragrance-free cleansers and laundry products", "Try to reduce scratching and keep nails short"],
      call: ["The rash is rapidly worsening", "Skin becomes painful, warm, draining, or crusted", "You develop fever with a worsening rash", "Itching is repeatedly disturbing sleep despite the plan"]
    },
    es: {
      title: "Dermatitis Atópica",
      summary: "Un tipo común de eccema que causa piel seca, inflamada y con picazón, con brotes que pueden repetirse.",
      meaning: "La dermatitis atópica es una enfermedad inflamatoria crónica. La barrera de la piel no retiene la humedad ni bloquea irritantes de manera normal, lo que favorece resequedad, picazón y erupciones recurrentes. No es contagiosa.",
      notice: ["Piel seca o áspera", "Picazón persistente", "Áreas rojas, marrones, grises o violetas según el tono de piel", "Piel engrosada o agrietada por rascarse repetidamente"],
      treatment: ["La hidratación diaria es una parte central del tratamiento", "Su dermatólogo puede recetar medicamentos tópicos antiinflamatorios", "Los casos más extensos pueden requerir fototerapia, inyecciones, pastillas u otros tratamientos sistémicos"],
      home: ["Use con frecuencia una crema hidratante espesa y sin fragancia", "Tome baños o duchas cortas con agua tibia", "Elija limpiadores y detergentes suaves y sin fragancia", "Trate de reducir el rascado y mantenga las uñas cortas"],
      call: ["La erupción empeora rápidamente", "La piel se vuelve dolorosa, caliente, con secreción o costras", "Aparece fiebre junto con una erupción que empeora", "La picazón interrumpe el sueño de forma repetida a pesar del tratamiento"]
    }
  },
  {
    slug: "actinic-keratosis",
    category: "Skin cancer",
    keywords: "ak solar keratosis precancer rough scaly sun damage",
    source: "https://www.aad.org/public/diseases/skin-cancer/actinic-keratosis-overview",
    en: {
      title: "Actinic Keratosis",
      summary: "A sun-damaged, precancerous skin growth that often feels rough or scaly.",
      meaning: "An actinic keratosis, often called an AK, develops after years of ultraviolet damage from the sun or indoor tanning. Some AKs can become squamous cell carcinoma, so dermatologists often recommend treatment or close monitoring.",
      notice: ["A rough or gritty patch", "A pink, red, tan, brown, or skin-colored spot", "A crusted or scaly area on sun-exposed skin", "A tender or sensitive spot"],
      treatment: ["A single lesion may be treated with freezing or another office procedure", "Multiple lesions or a broader sun-damaged area may be treated with a prescription field therapy", "Your dermatologist may recommend periodic skin checks"],
      home: ["Use broad-spectrum SPF 30+ sunscreen daily", "Wear protective clothing, a hat, and seek shade", "Avoid tanning beds", "Watch for changing, bleeding, painful, or fast-growing spots"],
      call: ["A spot grows quickly", "It repeatedly bleeds or forms a sore", "It becomes significantly painful or tender", "You notice a new persistent growth that looks different from your usual AKs"]
    },
    es: {
      title: "Queratosis Actínica",
      summary: "Una lesión precancerosa causada por daño solar que suele sentirse áspera o escamosa.",
      meaning: "La queratosis actínica, o QA, aparece después de años de daño por radiación ultravioleta del sol o camas de bronceado. Algunas pueden transformarse en carcinoma escamocelular, por lo que suelen tratarse o vigilarse de cerca.",
      notice: ["Parche áspero o con textura de lija", "Mancha rosada, roja, marrón, beige o del color de la piel", "Área con costra o escamas en piel expuesta al sol", "Zona sensible o dolorosa"],
      treatment: ["Una lesión aislada puede tratarse con congelación u otro procedimiento en el consultorio", "Muchas lesiones o un área extensa de daño solar pueden tratarse con una terapia tópica recetada", "Su dermatólogo puede recomendar controles periódicos de la piel"],
      home: ["Use protector solar de amplio espectro SPF 30+ todos los días", "Use ropa protectora, sombrero y busque sombra", "Evite las camas de bronceado", "Observe si aparecen cambios, sangrado, dolor o crecimiento rápido"],
      call: ["Una lesión crece rápidamente", "Sangra repetidamente o forma una llaga", "Se vuelve claramente dolorosa o sensible", "Aparece un crecimiento nuevo y persistente diferente a sus QA habituales"]
    }
  },
  {
    slug: "basal-cell-carcinoma",
    category: "Skin cancer",
    keywords: "bcc basal cell skin cancer pearly bleeding sore",
    source: "https://www.aad.org/public/diseases/skin-cancer/basal-cell-carcinoma",
    en: {
      title: "Basal Cell Carcinoma",
      summary: "The most common skin cancer. It usually grows slowly and is highly treatable when addressed early.",
      meaning: "Basal cell carcinoma, or BCC, is a skin cancer that often develops on areas with significant sun exposure. It rarely spreads to distant parts of the body, but it can grow deeper and damage nearby tissue if left untreated.",
      notice: ["A shiny or pearly bump", "A sore that heals and returns", "A scaly or irritated patch that persists", "A spot that bleeds easily or slowly enlarges"],
      treatment: ["Treatment depends on the size, location, subtype, and your overall health", "Options can include standard excision, Mohs surgery, scraping and cautery, topical treatment, or other approaches", "Your dermatologist will recommend the approach that best balances cure rate and tissue preservation"],
      home: ["Protect your skin from ultraviolet exposure every day", "Perform regular self-checks of your skin", "Keep follow-up visits after treatment", "Photograph a spot if you are monitoring a change between visits"],
      call: ["A known or suspected lesion is growing quickly", "A spot repeatedly bleeds or will not heal", "You develop new pain, numbness, or another unusual sensation near the lesion", "A treated site develops a persistent new growth"]
    },
    es: {
      title: "Carcinoma Basocelular",
      summary: "El cáncer de piel más común. Suele crecer lentamente y es muy tratable cuando se atiende temprano.",
      meaning: "El carcinoma basocelular, o CBC, es un cáncer de piel que aparece con frecuencia en zonas con mucha exposición solar. Rara vez se disemina a órganos distantes, pero puede crecer en profundidad y dañar tejidos cercanos si no se trata.",
      notice: ["Bulto brillante o perlado", "Llaga que cicatriza y vuelve a aparecer", "Parche escamoso o irritado que persiste", "Lesión que sangra con facilidad o crece lentamente"],
      treatment: ["El tratamiento depende del tamaño, la ubicación, el subtipo y su estado general de salud", "Las opciones pueden incluir escisión, cirugía de Mohs, raspado y cauterio, medicamentos tópicos u otros enfoques", "Su dermatólogo recomendará la opción que mejor combine curación y preservación de tejido"],
      home: ["Proteja la piel de la radiación ultravioleta todos los días", "Revise su piel regularmente", "Mantenga las visitas de seguimiento después del tratamiento", "Tome una foto si está vigilando un cambio entre consultas"],
      call: ["Una lesión conocida o sospechosa crece rápidamente", "Una mancha sangra repetidamente o no cicatriza", "Aparecen dolor nuevo, entumecimiento u otra sensación inusual cerca de la lesión", "Surge un crecimiento persistente en un sitio previamente tratado"]
    }
  },
  {
    slug: "squamous-cell-carcinoma",
    category: "Skin cancer",
    keywords: "scc squamous cell skin cancer scaly dome sore bleeding",
    source: "https://www.aad.org/public/diseases/skin-cancer/squamous-cell-carcinoma/",
    en: {
      title: "Squamous Cell Carcinoma",
      summary: "A common skin cancer that may look scaly, firm, crusted, wart-like, or like a sore that does not heal.",
      meaning: "Squamous cell carcinoma, or SCC, is a skin cancer that often develops in sun-damaged skin. Most are highly treatable when found early. Some SCCs can grow quickly, recur, or spread, so timely evaluation and treatment matter.",
      notice: ["A rough or scaly patch", "A firm or dome-shaped bump", "A persistent crusted or wart-like growth", "A sore that bleeds, heals, and returns"],
      treatment: ["Treatment is selected based on the tumor's location, size, features, and risk level", "Surgery is common, including standard excision or Mohs surgery in appropriate cases", "Additional treatments may be considered when surgery is not the best option"],
      home: ["Use daily broad-spectrum sun protection", "Check your skin regularly, including previously treated areas", "Keep scheduled follow-up skin exams", "Avoid tanning beds and intentional tanning"],
      call: ["A growth is enlarging quickly", "A lesion is painful, tender, numb, or bleeding", "You notice a new lump near the area", "A treated site develops a persistent bump or sore"]
    },
    es: {
      title: "Carcinoma Escamocelular",
      summary: "Un cáncer de piel común que puede verse escamoso, firme, con costra, parecido a una verruga o como una llaga que no cicatriza.",
      meaning: "El carcinoma escamocelular, o CEC, suele aparecer en piel dañada por el sol. La mayoría es muy tratable cuando se detecta temprano. Algunos pueden crecer rápido, volver a aparecer o diseminarse, por lo que es importante evaluarlos a tiempo.",
      notice: ["Parche áspero o escamoso", "Bulto firme o en forma de cúpula", "Crecimiento persistente con costra o parecido a una verruga", "Llaga que sangra, cicatriza y vuelve"],
      treatment: ["El tratamiento se elige según la ubicación, el tamaño, las características y el nivel de riesgo del tumor", "La cirugía es común, incluida la escisión o la cirugía de Mohs cuando corresponde", "Pueden considerarse tratamientos adicionales si la cirugía no es la mejor opción"],
      home: ["Use protección solar de amplio espectro todos los días", "Revise su piel con regularidad, incluidas las zonas tratadas", "Mantenga los controles dermatológicos programados", "Evite camas de bronceado y bronceado intencional"],
      call: ["Un crecimiento aumenta rápidamente", "Una lesión duele, está sensible, se siente entumecida o sangra", "Nota un nuevo bulto cerca del área", "Un sitio tratado desarrolla un bulto o una llaga persistente"]
    }
  },
  {
    slug: "psoriasis",
    category: "Inflammatory",
    keywords: "psoriasis plaques scales scalp elbows knees itch",
    source: "https://www.aad.org/public/diseases/psoriasis/what/overview",
    en: {
      title: "Psoriasis",
      summary: "An immune-driven condition that causes skin cells to build up too quickly, often creating thick or scaly plaques.",
      meaning: "Psoriasis is a chronic inflammatory disease. Skin cells are produced much faster than normal and collect on the surface. It is not contagious. Some people with psoriasis also develop joint symptoms or other health conditions, so ongoing care can matter beyond the skin.",
      notice: ["Raised scaly plaques", "Itching, burning, or tenderness", "Scalp flaking or thick scale", "Nail pitting, thickening, or lifting in some people"],
      treatment: ["Treatment may include topical medicines, light therapy, pills, or injectable medicines", "The best plan depends on severity, body areas involved, joint symptoms, and other health factors", "Long-term control often requires maintenance rather than one short treatment course"],
      home: ["Moisturize regularly", "Learn and reduce personal triggers when possible", "Avoid picking scale or scratching plaques", "Tell your dermatologist about new joint pain, swelling, or morning stiffness"],
      call: ["The rash suddenly becomes widespread or much more inflamed", "You develop significant joint pain or swelling", "You develop fever or feel ill with a major skin flare", "Treatment causes a concerning reaction"]
    },
    es: {
      title: "Psoriasis",
      summary: "Una enfermedad impulsada por el sistema inmunitario que acelera la producción de células de la piel y forma placas gruesas o escamosas.",
      meaning: "La psoriasis es una enfermedad inflamatoria crónica. Las células de la piel se producen mucho más rápido de lo normal y se acumulan en la superficie. No es contagiosa. Algunas personas también presentan síntomas en las articulaciones u otras condiciones de salud.",
      notice: ["Placas elevadas con escamas", "Picazón, ardor o sensibilidad", "Descamación o escamas gruesas en el cuero cabelludo", "Hoyuelos, engrosamiento o separación de las uñas en algunas personas"],
      treatment: ["El tratamiento puede incluir medicamentos tópicos, fototerapia, pastillas o medicamentos inyectables", "El mejor plan depende de la gravedad, las áreas afectadas, los síntomas articulares y otros factores de salud", "El control a largo plazo suele requerir mantenimiento"],
      home: ["Hidrate la piel con frecuencia", "Identifique y reduzca sus desencadenantes cuando sea posible", "Evite arrancar escamas o rascar las placas", "Informe a su dermatólogo sobre dolor, hinchazón o rigidez articular nueva"],
      call: ["La erupción se vuelve de repente mucho más extensa o inflamada", "Aparece dolor o hinchazón importante en las articulaciones", "Tiene fiebre o se siente enfermo durante un brote fuerte", "El tratamiento causa una reacción preocupante"]
    }
  },
  {
    slug: "rosacea",
    category: "Inflammatory",
    keywords: "rosacea redness flushing vessels face bumps ocular",
    source: "https://www.aad.org/public/diseases/rosacea/what-is/overview",
    en: {
      title: "Rosacea",
      summary: "A chronic facial skin condition that can cause flushing, persistent color change, visible vessels, bumps, or eye irritation.",
      meaning: "Rosacea commonly affects the central face and can look different across skin tones. It often flares in response to personal triggers. Treatment cannot permanently cure rosacea, but it can reduce symptoms, prevent progression, and make flares easier to control.",
      notice: ["Frequent facial flushing", "Persistent red, violet, or brown color change", "Acne-like bumps or visible blood vessels", "Burning, stinging, dryness, or irritated eyes"],
      treatment: ["Topical or oral medicines may be used for inflammatory bumps", "Other medicines or procedures may target persistent redness or visible vessels", "Eye symptoms sometimes need specific treatment"],
      home: ["Use gentle skin care and daily sunscreen", "Track foods, temperature, products, or activities that trigger flares", "Avoid harsh scrubs and irritating products", "Protect the face from extreme heat, cold, and wind when these trigger symptoms"],
      call: ["You develop eye pain, marked redness, light sensitivity, or vision changes", "Facial swelling is significant", "A flare is severe or persistent despite your plan", "A treatment causes a concerning reaction"]
    },
    es: {
      title: "Rosácea",
      summary: "Una enfermedad crónica de la cara que puede causar enrojecimiento, cambios de color persistentes, vasos visibles, granitos o irritación ocular.",
      meaning: "La rosácea suele afectar la parte central de la cara y puede verse diferente según el tono de piel. A menudo presenta brotes por desencadenantes personales. No existe una cura permanente, pero el tratamiento puede reducir síntomas y ayudar a prevenir que empeore.",
      notice: ["Rubor frecuente de la cara", "Color rojo, violeta o marrón que dura más tiempo", "Granitos parecidos al acné o vasos sanguíneos visibles", "Ardor, picazón, resequedad u ojos irritados"],
      treatment: ["Pueden usarse medicamentos tópicos u orales para los brotes inflamatorios", "Otros medicamentos o procedimientos pueden tratar el color persistente o los vasos visibles", "Los síntomas oculares a veces requieren tratamiento específico"],
      home: ["Use cuidado suave de la piel y protector solar diario", "Anote alimentos, temperaturas, productos o actividades que disparan sus brotes", "Evite exfoliantes fuertes y productos irritantes", "Proteja la cara del calor, frío y viento extremos si empeoran sus síntomas"],
      call: ["Aparecen dolor ocular, enrojecimiento intenso, sensibilidad a la luz o cambios de visión", "La hinchazón facial es importante", "Un brote es intenso o persistente a pesar del plan", "Un tratamiento causa una reacción preocupante"]
    }
  },
  {
    slug: "warts",
    category: "Infections",
    keywords: "warts verruca hpv plantar hand foot contagious",
    source: "https://www.aad.org/public/diseases/a-z/warts-overview",
    en: {
      title: "Common Warts",
      summary: "Benign skin growths caused by certain human papillomaviruses. Warts can spread to other skin or other people.",
      meaning: "A common wart forms when a wart-causing type of HPV infects the outer skin. Warts are not cancer, and many eventually go away without treatment. Treatment can help them clear faster, especially when they are painful, spreading, or bothersome.",
      notice: ["A rough or cauliflower-like bump", "Tiny dark dots within the wart from small blood vessels", "Clusters of warts", "Pain with pressure when a wart is on the bottom of the foot"],
      treatment: ["Treatment may include freezing, salicylic acid, or another office or home therapy", "More than one treatment session is often needed", "A dermatologist should evaluate growths that do not behave like typical warts"],
      home: ["Avoid picking or shaving directly over a wart", "Wash your hands after touching a wart", "Do not share nail tools, pumice stones, or other items used on the wart", "Keep plantar warts covered in shared locker-room or pool areas"],
      call: ["A growth is bleeding without being picked or injured", "It is rapidly changing or looks unlike a typical wart", "You are immunosuppressed or have poor circulation and are considering self-treatment", "A painful plantar wart is affecting walking"]
    },
    es: {
      title: "Verrugas Comunes",
      summary: "Crecimientos benignos causados por ciertos virus del papiloma humano. Pueden extenderse a otras zonas o a otras personas.",
      meaning: "Una verruga común aparece cuando un tipo de VPH que causa verrugas infecta la capa externa de la piel. No es cáncer y muchas desaparecen con el tiempo sin tratamiento. El tratamiento puede acelerar la desaparición, especialmente si duele o se está extendiendo.",
      notice: ["Bulto áspero o con aspecto de coliflor", "Pequeños puntos oscuros por vasos sanguíneos", "Grupos de verrugas", "Dolor con presión si está en la planta del pie"],
      treatment: ["El tratamiento puede incluir congelación, ácido salicílico u otra terapia", "A menudo se necesita más de una sesión", "Un dermatólogo debe revisar crecimientos que no se comportan como verrugas típicas"],
      home: ["Evite arrancar la verruga o afeitar directamente sobre ella", "Lávese las manos después de tocarla", "No comparta limas, piedras pómez ni herramientas usadas sobre la verruga", "Cubra las verrugas plantares en vestidores o áreas de piscina compartidas"],
      call: ["Un crecimiento sangra sin haberlo manipulado ni lesionado", "Cambia rápidamente o no parece una verruga típica", "Tiene inmunosupresión o mala circulación y está considerando tratarla por su cuenta", "Una verruga plantar dolorosa dificulta caminar"]
    }
  },
  {
    slug: "alopecia-areata",
    category: "Hair",
    keywords: "alopecia areata patchy hair loss bald spots autoimmune",
    source: "https://www.aad.org/public/diseases/hair-loss/types/alopecia",
    en: {
      title: "Alopecia Areata",
      summary: "An autoimmune form of hair loss that often begins with one or more smooth, round or oval bald patches.",
      meaning: "Alopecia areata happens when the immune system attacks hair follicles. The follicles are usually not destroyed, which means hair can regrow. The course is unpredictable: some people regrow hair without treatment, while others develop new patches or more extensive hair loss.",
      notice: ["Smooth round or oval patches of hair loss", "Hair loss on the scalp, beard, eyebrows, eyelashes, or other areas", "Occasional tingling or itching in affected areas", "Small pits or other nail changes in some people"],
      treatment: ["Treatment is not always necessary for a small stable patch", "Topical or injected corticosteroids may be used in selected cases", "More extensive disease may have additional topical, oral, or immune-targeting treatment options"],
      home: ["Protect exposed scalp or skin from the sun", "Use gentle hair care", "Avoid traction or harsh chemical treatments on fragile hair", "Discuss eyebrow or eyelash protection if those areas are involved"],
      call: ["Hair loss is rapidly expanding", "You are losing eyebrows or eyelashes and your eyes are becoming irritated", "You develop significant scalp inflammation, scaling, or pain", "The hair loss is causing substantial emotional distress"]
    },
    es: {
      title: "Alopecia Areata",
      summary: "Una forma autoinmunitaria de caída del cabello que suele comenzar con una o más áreas lisas, redondas u ovaladas sin pelo.",
      meaning: "La alopecia areata ocurre cuando el sistema inmunitario ataca los folículos pilosos. Por lo general los folículos no se destruyen, por lo que el cabello puede volver a crecer. Su evolución es impredecible: algunas personas mejoran sin tratamiento y otras desarrollan nuevas áreas.",
      notice: ["Áreas lisas, redondas u ovaladas sin cabello", "Caída en cuero cabelludo, barba, cejas, pestañas u otras zonas", "A veces picazón u hormigueo", "Pequeños hoyuelos u otros cambios en las uñas"],
      treatment: ["No siempre se necesita tratamiento para una zona pequeña y estable", "Pueden usarse corticosteroides tópicos o inyectados en casos seleccionados", "La enfermedad más extensa puede tener opciones tópicas, orales o dirigidas al sistema inmunitario"],
      home: ["Proteja del sol el cuero cabelludo o la piel expuesta", "Use cuidado suave del cabello", "Evite peinados con mucha tensión o químicos agresivos", "Consulte sobre protección de ojos si se afectan cejas o pestañas"],
      call: ["La caída se extiende rápidamente", "Pierde cejas o pestañas y los ojos se irritan", "Aparece inflamación importante, descamación o dolor en el cuero cabelludo", "La caída del cabello causa angustia emocional importante"]
    }
  },
  {
    slug: "melasma",
    category: "Pigment",
    keywords: "melasma pigment hyperpigmentation dark patches face pregnancy sun",
    source: "https://www.aad.org/public/diseases/a-z/melasma-overview?NoAds=",
    en: {
      title: "Melasma",
      summary: "Dark facial patches influenced by light exposure, heat, hormones, genetics, and skin irritation.",
      meaning: "Melasma is a common pigment condition that causes darker patches, usually on both sides of the face. It is harmless and not contagious, but it can be persistent. Sun and visible light can worsen it, and hormones may also contribute.",
      notice: ["Brown, gray-brown, or blue-gray patches depending on skin tone", "Common areas include the cheeks, forehead, upper lip, chin, and nose", "Patches often appear symmetrically", "Color may deepen after sun or heat exposure"],
      treatment: ["Daily light protection is the foundation of treatment", "Your dermatologist may recommend prescription creams that reduce pigment production or speed skin turnover", "Chemical peels, lasers, or other procedures may be considered carefully in selected patients"],
      home: ["Use broad-spectrum SPF 30+ sunscreen every day", "A tinted mineral sunscreen with iron oxides can help block visible light", "Use gentle products and stop anything that repeatedly burns or stings", "Wear a wide-brimmed hat and seek shade when possible"],
      call: ["A dark spot is new, changing, bleeding, or looks different from the other patches", "Pigment is rapidly worsening despite careful protection", "A treatment causes marked irritation", "You are pregnant or trying to become pregnant and need help reviewing treatment safety"]
    },
    es: {
      title: "Melasma",
      summary: "Manchas oscuras en la cara influenciadas por la luz, el calor, las hormonas, la genética y la irritación de la piel.",
      meaning: "El melasma es una alteración común del pigmento que causa manchas más oscuras, por lo general en ambos lados de la cara. Es inofensivo y no es contagioso, pero puede ser persistente. El sol y la luz visible pueden empeorarlo y las hormonas también pueden contribuir.",
      notice: ["Manchas marrones, marrón grisáceo o azul grisáceo según el tono de piel", "Zonas comunes: mejillas, frente, labio superior, mentón y nariz", "Las manchas suelen aparecer de forma simétrica", "El color puede oscurecerse con sol o calor"],
      treatment: ["La protección diaria contra la luz es la base del tratamiento", "Su dermatólogo puede recomendar cremas recetadas que reduzcan la producción de pigmento o aceleren la renovación de la piel", "Peelings químicos, láseres u otros procedimientos pueden considerarse con cuidado en pacientes seleccionados"],
      home: ["Use protector solar de amplio espectro SPF 30+ todos los días", "Un protector mineral con color y óxidos de hierro puede ayudar contra la luz visible", "Use productos suaves y suspenda lo que arda o irrite repetidamente", "Use sombrero de ala ancha y busque sombra cuando sea posible"],
      call: ["Una mancha oscura es nueva, cambia, sangra o se ve diferente a las demás", "La pigmentación empeora rápidamente pese a buena protección", "Un tratamiento causa irritación intensa", "Está embarazada o busca embarazo y necesita revisar la seguridad de su tratamiento"]
    }
  }
];

const uiText = {
  en: {
    meaning: "What this means",
    notice: "What you may notice",
    treatment: "What treatment may involve",
    home: "What you can do at home",
    call: "Contact your dermatologist sooner if",
    qr: "Scan to reopen",
    source: "Source used for this prototype",
    review: "Clinician review is required before using this prototype as production patient education.",
    disclaimer: "This page provides general education only. It is not a diagnosis or a substitute for medical advice from your dermatologist. If you have an urgent or life-threatening problem, seek emergency care."
  },
  es: {
    meaning: "Qué significa",
    notice: "Qué puede notar",
    treatment: "Qué puede incluir el tratamiento",
    home: "Qué puede hacer en casa",
    call: "Contacte a su dermatólogo antes si",
    qr: "Escanee para volver a abrir",
    source: "Fuente utilizada para este prototipo",
    review: "Se requiere revisión clínica antes de usar este prototipo como educación para pacientes en producción.",
    disclaimer: "Esta página ofrece educación general solamente. No es un diagnóstico ni sustituye el consejo médico de su dermatólogo. Si tiene un problema urgente o que amenaza la vida, busque atención de emergencia."
  }
};

const categoryOrder = ["All", "Inflammatory", "Skin cancer", "Hair", "Pigment", "Infections"];
const defaults = {
  practiceName: "AION Dermatology",
  physicianName: "Your dermatology team",
  bookingUrl: ""
};

function getSettings() {
  try {
    const stored = JSON.parse(localStorage.getItem("aionTakehomeSettings") || "{}");
    return { ...defaults, ...stored };
  } catch {
    return { ...defaults };
  }
}

function saveSettings(settings) {
  localStorage.setItem("aionTakehomeSettings", JSON.stringify(settings));
}

function safeExternalUrl(value) {
  if (!value) return "";
  try {
    const parsed = new URL(value);
    return ["http:", "https:"].includes(parsed.protocol) ? parsed.toString() : "";
  } catch {
    return "";
  }
}

function applyBranding() {
  const settings = getSettings();
  const preview = document.getElementById("previewPracticeName");
  const patientPractice = document.getElementById("patientPracticeName");
  const patientPhysician = document.getElementById("patientPhysicianName");
  const bookButton = document.getElementById("bookButton");
  if (preview) preview.textContent = settings.practiceName;
  if (patientPractice) patientPractice.textContent = settings.practiceName;
  if (patientPhysician) patientPhysician.textContent = settings.physicianName;
  if (bookButton) {
    const url = safeExternalUrl(settings.bookingUrl);
    if (url) {
      bookButton.href = url;
      bookButton.removeAttribute("aria-disabled");
      bookButton.style.opacity = "1";
      bookButton.style.pointerEvents = "auto";
    } else {
      bookButton.href = "#";
      bookButton.setAttribute("aria-disabled", "true");
      bookButton.style.opacity = ".55";
      bookButton.style.pointerEvents = "none";
    }
  }
}

function renderList(listElement, items) {
  listElement.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
  });
}

function topicUrl(slug) {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("topic", slug);
  return url.toString();
}

function renderPatientTopic(topic, language = "en") {
  const content = topic[language] || topic.en;
  const labels = uiText[language] || uiText.en;

  document.documentElement.lang = language;
  document.title = `${content.title} | AION Takehome`;
  document.getElementById("topicCategory").textContent = topic.category;
  document.getElementById("topicTitle").textContent = content.title;
  document.getElementById("topicSummary").textContent = content.summary;
  document.getElementById("topicMeaning").textContent = content.meaning;
  renderList(document.getElementById("topicNotice"), content.notice);
  renderList(document.getElementById("topicTreatment"), content.treatment);
  renderList(document.getElementById("topicHome"), content.home);
  renderList(document.getElementById("topicCall"), content.call);

  document.getElementById("meaningHeading").textContent = labels.meaning;
  document.getElementById("noticeHeading").textContent = labels.notice;
  document.getElementById("treatmentHeading").textContent = labels.treatment;
  document.getElementById("homeHeading").textContent = labels.home;
  document.getElementById("callHeading").textContent = labels.call;
  document.getElementById("qrCaption").textContent = labels.qr;
  document.getElementById("sourceHeading").textContent = labels.source;
  document.getElementById("reviewNote").textContent = labels.review;
  document.getElementById("disclaimerText").textContent = labels.disclaimer;
  document.getElementById("sourceLink").href = topic.source;
  document.getElementById("qrImage").src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(topicUrl(topic.slug))}`;

  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.language === language);
  });
  localStorage.setItem("aionTakehomeLanguage", language);
}

function initializePatientView(topic) {
  document.getElementById("marketingView").hidden = true;
  document.getElementById("topicView").hidden = false;
  document.getElementById("libraryNavLink").href = "./#library";

  const switcher = document.getElementById("languageSwitch");
  [
    ["en", "English"],
    ["es", "Español"]
  ].forEach(([code, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "language-button";
    button.dataset.language = code;
    button.textContent = label;
    button.addEventListener("click", () => renderPatientTopic(topic, code));
    switcher.appendChild(button);
  });

  const preferred = localStorage.getItem("aionTakehomeLanguage");
  renderPatientTopic(topic, preferred === "es" ? "es" : "en");
  applyBranding();

  document.getElementById("printButton").addEventListener("click", () => window.print());
  document.getElementById("shareButton").addEventListener("click", async () => {
    const language = localStorage.getItem("aionTakehomeLanguage") === "es" ? "es" : "en";
    const data = topic[language] || topic.en;
    const shareData = { title: data.title, text: data.summary, url: topicUrl(topic.slug) };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        const button = document.getElementById("shareButton");
        const original = button.textContent;
        button.textContent = language === "es" ? "Enlace copiado" : "Link copied";
        setTimeout(() => { button.textContent = original; }, 1400);
      }
    } catch {
      // Sharing can be cancelled by the user; no action is needed.
    }
  });
}

function initializeLibrary() {
  const topicGrid = document.getElementById("topicGrid");
  const search = document.getElementById("topicSearch");
  const filters = document.getElementById("categoryFilters");
  const empty = document.getElementById("emptyState");
  let activeCategory = "All";

  function renderCards() {
    const query = search.value.trim().toLowerCase();
    const filtered = topics.filter((topic) => {
      const categoryMatch = activeCategory === "All" || topic.category === activeCategory;
      const haystack = `${topic.en.title} ${topic.es.title} ${topic.en.summary} ${topic.keywords} ${topic.category}`.toLowerCase();
      return categoryMatch && (!query || haystack.includes(query));
    });

    topicGrid.innerHTML = "";
    filtered.forEach((topic) => {
      const card = document.createElement("a");
      card.className = "topic-card";
      card.href = `?topic=${encodeURIComponent(topic.slug)}`;

      const top = document.createElement("div");
      top.className = "topic-card-top";
      const category = document.createElement("span");
      category.className = "topic-card-category";
      category.textContent = topic.category;
      const arrow = document.createElement("span");
      arrow.className = "topic-card-arrow";
      arrow.textContent = "↗";
      top.append(category, arrow);

      const copy = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = topic.en.title;
      const summary = document.createElement("p");
      summary.textContent = topic.en.summary;
      copy.append(title, summary);
      card.append(top, copy);
      topicGrid.appendChild(card);
    });

    empty.hidden = filtered.length > 0;
  }

  categoryOrder.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-button${category === "All" ? " active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      activeCategory = category;
      filters.querySelectorAll("button").forEach((node) => node.classList.remove("active"));
      button.classList.add("active");
      renderCards();
    });
    filters.appendChild(button);
  });

  search.addEventListener("input", renderCards);
  renderCards();
  applyBranding();
}

function initializeSettings() {
  const dialog = document.getElementById("settingsDialog");
  const openButton = document.getElementById("practiceSettingsBtn");
  const form = document.getElementById("settingsForm");
  const saveButton = document.getElementById("saveSettingsButton");
  if (!dialog || !openButton || !form || !saveButton) return;

  openButton.addEventListener("click", () => {
    const settings = getSettings();
    document.getElementById("practiceNameInput").value = settings.practiceName;
    document.getElementById("physicianNameInput").value = settings.physicianName;
    document.getElementById("bookingUrlInput").value = settings.bookingUrl;
    dialog.showModal();
  });

  saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    const practiceName = document.getElementById("practiceNameInput").value.trim() || defaults.practiceName;
    const physicianName = document.getElementById("physicianNameInput").value.trim() || defaults.physicianName;
    const rawBooking = document.getElementById("bookingUrlInput").value.trim();
    const bookingUrl = rawBooking ? safeExternalUrl(rawBooking) : "";

    if (rawBooking && !bookingUrl) {
      const input = document.getElementById("bookingUrlInput");
      input.setCustomValidity("Please enter a full http:// or https:// URL.");
      input.reportValidity();
      input.addEventListener("input", () => input.setCustomValidity(""), { once: true });
      return;
    }

    saveSettings({ practiceName, physicianName, bookingUrl });
    applyBranding();
    dialog.close();
  });
}

(function init() {
  initializeSettings();
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("topic");
  if (slug) {
    const topic = topics.find((item) => item.slug === slug);
    if (topic) {
      initializePatientView(topic);
      return;
    }
    window.history.replaceState({}, "", "./#library");
  }
  initializeLibrary();
})();
