"use strict";

var dynamicTrajectoryData = [{
  geometry: {
    type: 'LineString',
    coordinates: [[114.40016500000003, 30.654250000000008], [114.4002487273933, 30.654262810396705], [114.4002597654098, 30.65426449922714], [114.4002227081995, 30.654258829427256], [114.40016214991252, 30.65424956393302], [114.40010268469885, 30.65424046568038], [114.40006890670857, 30.654235297605293], [114.40008541009175, 30.654237822643722], [114.40017673927157, 30.654251808660693], [114.40027622655654, 30.6542900647746], [114.400037202106, 30.654393154863893], [114.39948745711311, 30.655130465471853], [114.40215091660765, 30.656862413469145], [114.40694569073477, 30.65873800727568], [114.4093629095217, 30.660257613639693], [114.41411828183793, 30.662377732094136], [114.41840102941042, 30.664061516560665], [114.42274878485172, 30.665701202597734], [114.4284026164401, 30.6679012987858], [114.43267898898178, 30.66963098287582], [114.43561309975932, 30.6707836250546], [114.441073939599, 30.67280358660418], [114.44548049601136, 30.67430163199314], [114.45023609135374, 30.675760520673556], [114.45526546800646, 30.677429595899653], [114.45522933539601, 30.677361674892907], [114.45415286650201, 30.6769843972564], [114.460133162813, 30.67923397957088], [114.47090276424416, 30.6831874845077], [114.47712927761326, 30.685312116594744], [114.48002881402182, 30.686109479109348], [114.48398168676067, 30.68724919386791], [114.48941958861137, 30.688399915454287], [114.49457458816049, 30.688633162638112], [114.49862913737032, 30.688464608550873], [114.50166376112143, 30.688279947051548], [114.50404722708075, 30.68834784653725], [114.50550771910576, 30.689108890325517], [114.50377089881992, 30.691145542319845], [114.50192176920528, 30.692220809647413], [114.50115962111721, 30.69257930750784], [114.50116463103745, 30.692609532598553], [114.50150041317607, 30.692490542519998], [114.50173362699013, 30.69240022080545], [114.50170967412846, 30.692408984474675], [114.50172163558089, 30.692415045725436], [114.50172190900571, 30.6924414994094], [114.50181731504257, 30.69234401698116], [114.50224056066546, 30.691815771618785], [114.50126795223227, 30.69054298777621], [114.50071118816074, 30.689933451154303], [114.49746150205637, 30.6890804010036], [114.4958496584081, 30.689651412198106], [114.4926387216248, 30.6896476146821], [114.48921667827555, 30.689419850057565], [114.48691203801434, 30.68913969049959], [114.48418917810245, 30.68840290330458], [114.48085712094777, 30.687374401856726], [114.47953240569402, 30.68687158870896], [114.47624057452191, 30.686040532885304], [114.47332026747287, 30.68528970172099], [114.47131244710566, 30.68464808246768], [114.46930529815528, 30.68398899398131], [114.46660706454212, 30.683244189449887], [114.4637098357988, 30.68241651527924], [114.46105997005412, 30.68156246542191], [114.45799598950859, 30.681029482390958], [114.45570609350276, 30.68087910387025], [114.45384985779472, 30.68045480599288], [114.45068611671397, 30.679536478118667], [114.4477310047165, 30.67853104738942], [114.44490527257912, 30.6775654253516], [114.44277893903823, 30.676867830280578], [114.44554087085824, 30.677678267319816], [114.44256576665859, 30.676808549270476], [114.434213417163, 30.674367281492366], [114.43185970811066, 30.673304769901705], [114.430219174692, 30.672476024006198], [114.4268394236164, 30.671218365524723], [114.42432559974962, 30.669961282615564], [114.42486469016704, 30.66892633212574], [114.42422820556573, 30.667942398851544], [114.42125436228075, 30.666912454277906], [114.41952416277327, 30.66673314108469], [114.4159336677712, 30.666693197913652], [114.4132953993766, 30.666580360392935], [114.4130030330928, 30.666497344863757], [114.41304133674484, 30.66655250538176], [114.41296655807253, 30.66654459610571], [114.413292, 30.666458]]
  }
}, {
  geometry: {
    type: 'LineString',
    coordinates: [[114.40126700000002, 30.657283000000003], [114.40327395515924, 30.65809133644817], [114.4067521585236, 30.659322625278204], [114.41026230675989, 30.66046046382377], [114.41369233669772, 30.66156440003492], [114.41688245085848, 30.66263566399698], [114.42011313830014, 30.66375267789377], [114.42289379869415, 30.66474304756934], [114.42688398995531, 30.666233134637604], [114.42983730869993, 30.66748608727678], [114.43252665257407, 30.6686407948778], [114.43563855493362, 30.6698480197295], [114.43883935799262, 30.671008724564718], [114.44165860165425, 30.672024186395124], [114.44497652313188, 30.673327164274404], [114.44889289228476, 30.674910027608917], [114.45185524874104, 30.676152304467163], [114.45448499449546, 30.677196255442038], [114.45803635737452, 30.678433559385144], [114.45763055008723, 30.678303915992053], [114.46153695295853, 30.679549530719626], [114.46757762853376, 30.681443904559057], [114.47138965312999, 30.68255917846482], [114.47389842122823, 30.6832251778749], [114.47610343547098, 30.683796353196684], [114.47891163274508, 30.684582223107782], [114.4824813471605, 30.685528931974588], [114.48660838076248, 30.68640664987727], [114.49108618434511, 30.686985220005912], [114.49571128965964, 30.6871393989694], [114.50028629186127, 30.686950415729473], [114.50461449400905, 30.686523604943456], [114.50849919916217, 30.68596430126872], [114.51174371037968, 30.685377839362616], [114.51415133072068, 30.68486955388247], [114.5155253632443, 30.68454477948565], [114.51572074280111, 30.684495049280752], [114.5173968995992, 30.684043619547737], [114.52155122234548, 30.68282335238254], [114.52615231579108, 30.68121748531081], [114.52948934788596, 30.679557492787985], [114.53173100691171, 30.677863387301294], [114.53369400055547, 30.676047300125315], [114.53581752322808, 30.67404061334646], [114.5378738493146, 30.67184222363421], [114.53962119055382, 30.669736967423663], [114.54137114590348, 30.66741338585227], [114.54307952811594, 30.6648338683307], [114.54457291269742, 30.66223070014334], [114.54607091907876, 30.659510626977323], [114.54767826905574, 30.656618172170568], [114.54937979696129, 30.65354418548595], [114.55107606694168, 30.650446326119663], [114.55255020406375, 30.64772625906066], [114.55400599051218, 30.644919765350476], [114.55572659408587, 30.641404538962856], [114.55693503843837, 30.63882378170682], [114.55795798250324, 30.63653210366457], [114.55929179712946, 30.633528424888535], [114.56078825834182, 30.63016845965164], [114.56223750851304, 30.626937653617052], [114.56344367029398, 30.624291900729705], [114.56443859658417, 30.62220571536846], [114.56543944379624, 30.62026191460696], [114.5666639712204, 30.618040323462818], [114.56765434304313, 30.616305563743833], [114.5675611404941, 30.616472347802386], [114.56703803173964, 30.617277911829163], [114.56647032216532, 30.61808086627329], [114.56606029838919, 30.618626085658672], [114.56600965093911, 30.61865970256742], [114.56652007034285, 30.61792784958164], [114.56779217177683, 30.616178197041275], [114.56976732124113, 30.613529142890595], [114.57179229571237, 30.6109493503182], [114.57314902458955, 30.609497355174497], [114.5736009330404, 30.60946737746467], [114.57343114264442, 30.610328682483306], [114.57294860049831, 30.61150954066444], [114.57246091324888, 30.612440981820498], [114.57215762404635, 30.61279707496447], [114.57201955004517, 30.612681561283296], [114.57200616870124, 30.6122421107259], [114.57207695747061, 30.611626393241224], [114.5721913938092, 30.610982078778182], [114.57230895517301, 30.610456837285707], [114.57238911901803, 30.61019833871272], [114.5723913628002, 30.610354253008158], [114.57227516397555, 30.61107225012094], [114.572, 30.6125]]
  }
}, {
  geometry: {
    type: 'LineString',
    coordinates: [[114.38100999999997, 30.654346999999998], [114.38074116028562, 30.65417860472462], [114.37953411877615, 30.653320385269513], [114.3790260251477, 30.6529825294837], [114.37774527328605, 30.652160618268045], [114.3768067254086, 30.651539160400333], [114.37608351586503, 30.651093413217747], [114.37466307909709, 30.65031408823355], [114.37384861654121, 30.649843210667562], [114.37301392901702, 30.649403818672706], [114.37230598394414, 30.649032312892462], [114.3708663999949, 30.648198078954323], [114.3703362451899, 30.647889091920423], [114.36929095305737, 30.647267382659994], [114.36826285083572, 30.646640638354995], [114.36730159787692, 30.64614691519059], [114.36646181530517, 30.6456757410376], [114.36581533258364, 30.645252489748685], [114.36482960238934, 30.644594739845797], [114.36393226733168, 30.64396852083204], [114.36318742409962, 30.643449917111166], [114.3626421667767, 30.643041975276677], [114.36185606272622, 30.642470489080722], [114.36091128136945, 30.64179972756353], [114.36017472172627, 30.641191722257542], [114.35931253304558, 30.640529889349725], [114.35853345936047, 30.639917106669582], [114.35774559283566, 30.639247890762547], [114.35710724050408, 30.63872487816829], [114.35629338211935, 30.63801758890025], [114.35548821035476, 30.637284642957923], [114.35497218135933, 30.6368727925534], [114.35427944564103, 30.63627786844615], [114.35330744070086, 30.63547697235766], [114.35246238959611, 30.63483072775793], [114.35171506733963, 30.634324851441065], [114.35085228461092, 30.633718463861786], [114.35005777256299, 30.63310978638441], [114.34923407524653, 30.632377247289018], [114.34851778162842, 30.631710735259418], [114.34776092473625, 30.63101569254184], [114.34709271023242, 30.630350738678516], [114.34640258344454, 30.629708506686292], [114.34562055800767, 30.629001035164055], [114.34491154777459, 30.62831768432396], [114.34426746973288, 30.62775735710186], [114.34350280198565, 30.62724964415909], [114.34285599812301, 30.62684612545419], [114.3420235841581, 30.626393595581952], [114.341074819274, 30.62599343070781], [114.34011040414714, 30.62565638152243], [114.33924595127854, 30.625361692631508], [114.33822970568691, 30.625090794206734], [114.33782925238214, 30.62499593719455], [114.33664696252114, 30.624703108644926], [114.33571269633774, 30.624442175520677], [114.33495901208016, 30.62408953715093], [114.334450398063, 30.623773841336266], [114.33373994514669, 30.62317644641915], [114.33314532197119, 30.62254260081164], [114.33251300956124, 30.621957811596193], [114.33185490682624, 30.62132511413228], [114.33127081202097, 30.620768197468152], [114.33088675243368, 30.620380284454097], [114.33021933865548, 30.619721941368436], [114.3296143873645, 30.61907162770705], [114.32909025875324, 30.618457871951957], [114.32842046159587, 30.61773717427154], [114.32788722903312, 30.61712607655754], [114.32724799280236, 30.616410696647012], [114.32675085399823, 30.61572198538083], [114.32622249742258, 30.61506850194736], [114.32558912796998, 30.614362856564934], [114.32517135981281, 30.61379453545946], [114.3247057538003, 30.61318600825439], [114.32417688121461, 30.612405217596926], [114.32382294545816, 30.611802375959453], [114.3233607195002, 30.610956022028006], [114.32292040956753, 30.610190142964864], [114.32254218257567, 30.609627684326696], [114.32192613892745, 30.608807673760023], [114.32150246997237, 30.60834668981257], [114.32079904798032, 30.60751722712023], [114.32046186916665, 30.607084531169377], [114.31969578178898, 30.60625316918263], [114.31919577981337, 30.60578899859396], [114.31848525637322, 30.605208508449603], [114.31781983317605, 30.60448372815389], [114.31720795684598, 30.60381741962468], [114.316708, 30.603245]]
  }
}, {
  geometry: {
    type: 'LineString',
    coordinates: [[114.47355299999997, 30.68160999999999], [114.47304447950317, 30.68158289467493], [114.472559801574, 30.681482410079276], [114.47195610258974, 30.68129626733773], [114.47132627456922, 30.681078570070536], [114.47046638436872, 30.680737615323586], [114.46951296450733, 30.68034945751029], [114.46857994757372, 30.68003539159402], [114.46759949414131, 30.679733085500402], [114.46647904513456, 30.679367888262277], [114.46547943778666, 30.6789106687664], [114.46461677055537, 30.67835021413272], [114.46355303850395, 30.677863023954302], [114.46274727779998, 30.677684485199052], [114.46153016141837, 30.677396952209907], [114.46073630922675, 30.6770287596815], [114.45983021358322, 30.67634371811058], [114.45902282506866, 30.675668659258623], [114.45821147486954, 30.675216702284793], [114.45728894291558, 30.67490972221948], [114.45623564834699, 30.674628122635927], [114.45518459321514, 30.67430238541168], [114.45429295977905, 30.673948065595606], [114.45323486943187, 30.67352872828387], [114.45236686914471, 30.673350116896177], [114.45104744103283, 30.673484506811413], [114.45001304622657, 30.673925695684662], [114.4489885483659, 30.67463500454284], [114.44812024632138, 30.67532199284956], [114.4470083744464, 30.675931233476764], [114.44594763783788, 30.676149301197167], [114.44507620799759, 30.67621378523956], [114.44399519224676, 30.67622550814084], [114.44292513633275, 30.676150158540025], [114.44204849682063, 30.676020784507372], [114.44089967250316, 30.675822065519846], [114.43979703912721, 30.67559027663969], [114.43881455460999, 30.675286141798203], [114.43787641757454, 30.67497827860238], [114.43685930873406, 30.674599298121443], [114.43588703163675, 30.67407542173858], [114.43462809133456, 30.6734596930116], [114.43364326199391, 30.672949913751058], [114.43272701383997, 30.672509766326893], [114.43131640747339, 30.671829346834386], [114.43028090542919, 30.671224931453025], [114.42924314638172, 30.67047594927404], [114.42839010953249, 30.669923913125707], [114.4272174916515, 30.669290036580975], [114.4262086184952, 30.668851367209708], [114.42508706260791, 30.668386369887557], [114.4243175064663, 30.668048896064033], [114.42321790589324, 30.66738473670391], [114.42211313571471, 30.66677435183718], [114.421163581022, 30.66635001049407], [114.42002037275222, 30.666060508145957], [114.4191820920646, 30.665806268520562], [114.41877529713587, 30.665532970156892], [114.41713456712013, 30.664769452925444], [114.41615778610661, 30.664418418108202], [114.41507040167038, 30.6640594946331], [114.41395697013886, 30.663771236590968], [114.41295870360518, 30.66335759939403], [114.41199843244985, 30.662958127168494], [114.41142262849957, 30.662683187238514], [114.41006992676837, 30.662112676523275], [114.40910691191421, 30.661787232068097], [114.40803112947904, 30.66141302528193], [114.40735893391948, 30.661128770791862], [114.40621622417574, 30.66080411725205], [114.40525574621137, 30.660495573250316], [114.40445359439744, 30.660140667278416], [114.40340584230142, 30.659713413986104], [114.40252495042304, 30.65932137204299], [114.4016438386465, 30.65899461695528], [114.40069995882902, 30.658776835705282], [114.39980304104559, 30.65858679656549], [114.3988950238225, 30.658394437884436], [114.3980808581991, 30.6580949743056], [114.39709012343025, 30.65777048919734], [114.39644325547278, 30.657629028839988], [114.39527635308713, 30.65745835915064], [114.39421594003991, 30.65734800985792], [114.39332799018491, 30.657159207525243], [114.39233748633069, 30.65687178798583], [114.3912690626309, 30.656508431703333], [114.3905435661915, 30.656292854275986], [114.38952915465623, 30.656029802594617], [114.38839229066804, 30.65582329996898], [114.38725, 30.655667]]
  }
}, {
  geometry: {
    type: 'LineString',
    coordinates: [[114.354387, 30.636622999999997], [114.35360797469167, 30.63626728686775], [114.35215163085853, 30.635320934852043], [114.35103055779228, 30.634417818658424], [114.35012733655826, 30.633499800084945], [114.34897668968375, 30.63245263342471], [114.34767589927289, 30.631329890186326], [114.34661134156161, 30.63040726817499], [114.34551237411311, 30.6293125311428], [114.34424501932847, 30.628117137032053], [114.34316226951945, 30.627171418656435], [114.34203083453653, 30.626207617358105], [114.34092230960177, 30.625211182431812], [114.33966043075674, 30.624302967994428], [114.3383120856578, 30.623703780496733], [114.33698539026786, 30.623365366890223], [114.33536326378298, 30.622894763279803], [114.33408618316979, 30.622126509779736], [114.33304764487288, 30.621275548227707], [114.33200614116369, 30.620414841874847], [114.33103529649513, 30.619650099261072], [114.32974660835563, 30.61861996780882], [114.3286858700667, 30.617766207958827], [114.32757257270003, 30.61681450640458], [114.32657271349444, 30.61577943491396], [114.3257217148664, 30.614753237864367], [114.32479044669869, 30.61355865208573], [114.3238986890933, 30.61231788184453], [114.32307106853986, 30.611138930679598], [114.32255326223084, 30.610484706959156], [114.32304394949618, 30.611304317045082], [114.32207179619438, 30.609642612333616], [114.32001268112998, 30.606357411837973], [114.31933587743647, 30.605562541544195], [114.3185461278009, 30.6047612092844], [114.31792477790954, 30.604107508930298], [114.3172885452433, 30.603285387595186], [114.3165350724914, 30.60200757270659], [114.31582631631723, 30.601117356932317], [114.31473951471368, 30.60002100237353], [114.31357136808883, 30.599050405460286], [114.31245055156303, 30.598172291659672], [114.31156050949897, 30.59731659070686], [114.31042966155863, 30.596370393171853], [114.30923091121647, 30.595787390981073], [114.30782221592004, 30.595209317908743], [114.30633022996946, 30.594503893875654], [114.30549616905785, 30.593653790368144], [114.30445923259228, 30.592342228431818], [114.30374140581198, 30.591275857974207], [114.3029802421695, 30.589855418199967], [114.30241306886481, 30.58863122086885], [114.30185084217177, 30.58735980348245], [114.30110840244312, 30.58591972718064], [114.3003329670976, 30.584588457175332], [114.29958403221322, 30.58338301315548], [114.29881866157162, 30.582123065649036], [114.29815243268527, 30.580763713557992], [114.2974004690755, 30.579564636490524], [114.29654125139632, 30.578509934924377], [114.29570276280147, 30.577555440801852], [114.29450977101665, 30.576330928980724], [114.2936180059057, 30.575423552871158], [114.29264082683541, 30.574212254051318], [114.29177946939903, 30.572802782356472], [114.29126893666565, 30.571601253094354], [114.29076060947197, 30.569949132609292], [114.29030441062987, 30.56876425374438], [114.28969490942919, 30.567278045134916], [114.28933643864478, 30.566142818269043], [114.28851074537306, 30.564534548300664], [114.2874166310818, 30.563410696208003], [114.2860381367738, 30.562424879602883], [114.28514139640819, 30.561476960421864], [114.2842045070615, 30.56005706851841], [114.28349809395652, 30.55876927866255], [114.28290017685833, 30.557447099062415], [114.28240909811367, 30.556189035470506], [114.28196433431422, 30.554710980285222], [114.28148855295771, 30.553468858857872], [114.280639826108, 30.55216127589052], [114.27957808192443, 30.5512152364509], [114.2782725419158, 30.550353259031812], [114.277317417167, 30.549467301716174], [114.27677707138098, 30.548391585033492], [114.27609770047108, 30.546819698581828], [114.27565554481026, 30.54575469120497], [114.27522230022599, 30.544469154275223], [114.27464530477415, 30.54322293849177], [114.274413, 30.54118]]
  }
}];