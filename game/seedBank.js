const DUMMY_PLANTS = [{"commonName":"Common nettle","scientificName":"Urtica dioica","imgSrc":"https://bs.plantnet.org/image/o/9db58cbb3538a6b77384f972971d51869228e545","inv":0},{"commonName":"Barnyard grass","scientificName":"Dactylis glomerata","imgSrc":"https://bs.plantnet.org/image/o/f84a7d4fc2e627ccd451f568479b1932c2b2d900","inv":0},{"commonName":"Narrow-leaf plantain","scientificName":"Plantago lanceolata","imgSrc":"https://bs.plantnet.org/image/o/f8d7d6fe52e36d04f5ad1fc03f46f604d5c3cc43","inv":0},{"commonName":"Milfoil","scientificName":"Achillea millefolium","imgSrc":"https://bs.plantnet.org/image/o/d788a757cd8bac8c3b1378a970c078a7a937a174","inv":0},{"commonName":"Dutch clover","scientificName":"Trifolium repens","imgSrc":"https://bs.plantnet.org/image/o/170ca6a6020d9e9f95f86112577aeabcb23f5b96","inv":0},{"commonName":"Yorkshire-fog","scientificName":"Holcus lanatus","imgSrc":"https://bs.plantnet.org/image/o/c0800816e2f56ed6e7702c31efd91afcdfddd68c","inv":0},{"commonName":"Creeping buttercup","scientificName":"Ranunculus repens","imgSrc":"https://bs.plantnet.org/image/o/90746f2a4592ed4dbc6a166234f488654565605e","inv":0},{"commonName":"Pedunculate oak","scientificName":"Quercus robur","imgSrc":"https://bs.plantnet.org/image/o/0d16977470dfdcd37d495a5b33c2f343224ebe98","inv":0},{"commonName":"Red fescue","scientificName":"Festuca rubra","imgSrc":"https://bs.plantnet.org/image/o/fb1967942b880fb7c978ff76741d348a22611b88","inv":0},{"commonName":"European ash","scientificName":"Fraxinus excelsior","imgSrc":"https://bs.plantnet.org/image/o/84ef20b0276c3e0a6d32dd97a7b987b510feb961","inv":0},{"commonName":"Cowgrass clover","scientificName":"Trifolium pratense","imgSrc":"https://bs.plantnet.org/image/o/3bb52539dcca8b6bf19b9bf752631def901ba64c","inv":0},{"commonName":"Beech","scientificName":"Fagus sylvatica","imgSrc":"https://bs.plantnet.org/image/o/a733221df31a1ff99af03566841744f3b4c6cffe","inv":0},{"commonName":"Meadow buttercup","scientificName":"Ranunculus acris","imgSrc":"https://bs.plantnet.org/image/o/43c58aa2ef3d5a11ac1dd83d9b465e639338a3da","inv":0},{"commonName":"Hawthorn","scientificName":"Crataegus monogyna","imgSrc":"https://bs.plantnet.org/image/o/9a428f47e57e087f677d58967659592f8232c737","inv":0},{"commonName":"Garden sorrel","scientificName":"Rumex acetosa","imgSrc":"https://bs.plantnet.org/image/o/b07ad83adb571370a40982de0ec45248871486d6","inv":0},{"commonName":"Meadowsweet","scientificName":"Filipendula ulmaria","imgSrc":"https://bs.plantnet.org/image/o/53c73903dc455a3d734b193dad7d9d8c4ec0e324","inv":0},{"commonName":"European filbert","scientificName":"Corylus avellana","imgSrc":"https://bs.plantnet.org/image/o/0d92cadb0d66dce1b0a8b26913125d6501e31d68","inv":0},{"commonName":"Ditch reed","scientificName":"Phragmites australis","imgSrc":"https://bs.plantnet.org/image/o/8a74932da925aea8224f7929bf701806abec0c84","inv":0},{"commonName":"Gill-over-the-ground","scientificName":"Glechoma hederacea","imgSrc":"https://bs.plantnet.org/image/o/27d4a32d5f7c7c6b1748904f852d3e6d561a17cd","inv":0},{"commonName":"New zealand bent grass","scientificName":"Agrostis capillaris","imgSrc":"https://bs.plantnet.org/image/o/db3b1d70fed25a0c1a16ba5bf9ee79d980a510e9","inv":0},{"commonName":"Scented vernal grass","scientificName":"Anthoxanthum odoratum","imgSrc":"https://bs.plantnet.org/image/o/fc28e4e6d455f065e4e1f7972486244b09532030","inv":0},{"commonName":"Ivy","scientificName":"Hedera helix","imgSrc":"https://storage.googleapis.com/powop-assets/kew_profiles/Hedera-helix_fullsize.jpg","inv":0},{"commonName":"Common plantain","scientificName":"Plantago major","imgSrc":"https://bs.plantnet.org/image/o/75b98160f0aff037525320c1e0f165994499f2c3","inv":0},{"commonName":"Common bird's-foot trefoil","scientificName":"Lotus corniculatus","imgSrc":"https://bs.plantnet.org/image/o/4b105030937c65f9beb11775e84b45b8db184d86","inv":0},{"commonName":"Quickbeam","scientificName":"Sorbus aucuparia","imgSrc":"https://bs.plantnet.org/image/o/63073d2fbf45b90701279405ecc2eec0272906ed","inv":0},{"commonName":"Cleavers","scientificName":"Galium aparine","imgSrc":"https://bs.plantnet.org/image/o/a889db2f581d38b0780bc0ee66549b1583a1d4f4","inv":0},{"commonName":"Scotch pine","scientificName":"Pinus sylvestris","imgSrc":"https://bs.plantnet.org/image/o/33d84b84c09347d360afa0d610e220664cfb6d93","inv":0},{"commonName":"Heal-all","scientificName":"Prunella vulgaris","imgSrc":"https://bs.plantnet.org/image/o/b46f4000f9bec28dc6d74d501ddc15445e7f7667","inv":0},{"commonName":"Ray-grass-de-france","scientificName":"Arrhenatherum elatius","imgSrc":"https://bs.plantnet.org/image/o/2a0a729a03beb7c0c4d2f99986f8235459cb322a","inv":0},{"commonName":"Cork oak","scientificName":"Quercus suber","imgSrc":"https://bs.plantnet.org/image/o/18d98dce42b463a97cca4e642ab61aecce8c74f6","inv":0},{"commonName":"Sloe","scientificName":"Prunus spinosa","imgSrc":"https://bs.plantnet.org/image/o/74001fa4fbba45263756df516209aba8525620f9","inv":0},{"commonName":"Cow-parsnip","scientificName":"Heracleum sphondylium","imgSrc":"https://bs.plantnet.org/image/o/795061348098dfe2c4cdedd6a5dcb5c9db848d55","inv":0},{"commonName":"Tufted hairgrass","scientificName":"Deschampsia cespitosa","imgSrc":"https://bs.plantnet.org/image/o/f211f64ec30eef99019954d1f4284d56218417eb","inv":0},{"commonName":"European alder","scientificName":"Alnus glutinosa","imgSrc":"https://bs.plantnet.org/image/o/6cd82656ec7c0915f9027c2a68780d5d5ae5cb0e","inv":0},{"commonName":"Elder","scientificName":"Sambucus nigra","imgSrc":"https://bs.plantnet.org/image/o/594bda8000b118433847bf0973eb397de8a87543","inv":0},{"commonName":"Purple moor grass","scientificName":"Molinia caerulea","imgSrc":"https://bs.plantnet.org/image/o/02b9d49d58a8ed30b1dc870e975127ea15dd3cb3","inv":0},{"commonName":"Sycamore maple","scientificName":"Acer pseudoplatanus","imgSrc":"https://bs.plantnet.org/image/o/eb6373c5f52327ead500bd2ea145734b2491cbe5","inv":0},{"commonName":"Black thistle","scientificName":"Cirsium vulgare","imgSrc":"https://bs.plantnet.org/image/o/6de5f109347849554b9aa4dc16ad09721b0ba93c","inv":0},{"commonName":"Cinquefoil","scientificName":"Potentilla erecta","imgSrc":"https://bs.plantnet.org/image/o/804372f80e0604ccb34c5dd38d13c86a2eb6dab0","inv":0},{"commonName":"Cow-parsley","scientificName":"Anthriscus sylvestris","imgSrc":"https://bs.plantnet.org/image/o/ef5ece86db461681116e8bcdd132fb3ad7b6b6c7","inv":0},{"commonName":"Mountain geranium","scientificName":"Geranium robertianum","imgSrc":"https://bs.plantnet.org/image/o/15aff4c873c771b9ea9ded1648b7b23b8641a2a5","inv":0},{"commonName":"Smooth meadow grass","scientificName":"Poa pratensis","imgSrc":"https://bs.plantnet.org/image/o/6e25db3d223a2e7b26a3c762c4861ab5fb9010ac","inv":0},{"commonName":"Marsh thistle","scientificName":"Cirsium palustre","imgSrc":"https://bs.plantnet.org/image/o/b3d3f45d5ea0896f9e224190e3ac5fc8cafce633","inv":0},{"commonName":"Annual bluegrass","scientificName":"Poa annua","imgSrc":"https://bs.plantnet.org/image/o/c06fa1d2fc227c12fff8d764f9058e1cced33185","inv":0},{"commonName":"European white birch","scientificName":"Betula pendula","imgSrc":"https://bs.plantnet.org/image/o/c3c315234761da98b8e8068831130d372dcaf252","inv":0},{"commonName":"Garlic mustard","scientificName":"Alliaria petiolata","imgSrc":"https://bs.plantnet.org/image/o/b57a42b138998fa328a8fc2032676dfde6cad985","inv":0},{"commonName":"Daisy","scientificName":"Bellis perennis","imgSrc":"https://bs.plantnet.org/image/o/43061c6c2cb49908503eac2eaec0ddab69958e17","inv":0},{"commonName":"European blueberry","scientificName":"Vaccinium myrtillus","imgSrc":"https://bs.plantnet.org/image/o/76e8f509a667a1110611d76c7b84d5bbc03ccb1f","inv":0},{"commonName":"Bracken","scientificName":"Pteridium aquilinum","imgSrc":"https://bs.plantnet.org/image/o/94ed4fa4f55710b452e624de45faec9b17c5198b","inv":0},{"commonName":"Germander speedwell","scientificName":"Veronica chamaedrys","imgSrc":"https://bs.plantnet.org/image/o/2b8bd09230b0f06ab9fa52f4c4023d485c91c2a4","inv":0},{"commonName":"Common horsetail","scientificName":"Equisetum arvense","imgSrc":"https://bs.plantnet.org/image/o/38b0d1c57a937cef46001b123e55b54585886243","inv":0},{"commonName":"Wild angelica","scientificName":"Angelica sylvestris","imgSrc":"https://bs.plantnet.org/image/o/7a7da67cf77302d2db6724f5eeb5c9dec8b841af","inv":0},{"commonName":"Common gum cistus","scientificName":"Cistus ladanifer","imgSrc":"https://bs.plantnet.org/image/o/1084e7ffee110011cc6c57b319934a1e27d185cd","inv":0},{"commonName":"Common spruce","scientificName":"Picea abies","imgSrc":"https://bs.plantnet.org/image/o/839086b536fc2782b9c1cc0f9687b97f3a18ef43","inv":0},{"commonName":"Klamathweed","scientificName":"Hypericum perforatum","imgSrc":"https://bs.plantnet.org/image/o/f9c316ccbd7c6e99011d9fff72d90cb6a3ad08c8","inv":0},{"commonName":"Carrot","scientificName":"Daucus carota","imgSrc":"https://bs.plantnet.org/image/o/051631f859a3a433e2954747fa1bdb6bc09a0e66","inv":0},{"commonName":"Meadow cress","scientificName":"Cardamine pratensis","imgSrc":"https://bs.plantnet.org/image/o/14beb4902fb3e6ecf26640e7c8d330bf91877f02","inv":0},{"commonName":"Bennet's-root","scientificName":"Geum urbanum","imgSrc":"https://bs.plantnet.org/image/o/e94da91d689bba6ae9afd825fbec8df90d46b400","inv":0},{"commonName":"Cow vetch","scientificName":"Vicia cracca","imgSrc":"https://bs.plantnet.org/image/o/2f3a45757592d573823bad3278990ae85763d091","inv":0},{"commonName":"Gardener's-garters","scientificName":"Phalaris arundinacea","imgSrc":"https://bs.plantnet.org/image/o/c43cde942d68b916cabc35b415d92ba588786862","inv":0},{"commonName":"Common juniper","scientificName":"Juniperus communis","imgSrc":"https://bs.plantnet.org/image/o/e4676fc7c7ba86abd9273548ad8542756d3d8e23","inv":0},{"commonName":"Quackgrass","scientificName":"Elymus repens","imgSrc":"https://bs.plantnet.org/image/o/afdb865003c6a527a8b8a80e8f6972cab61e566b","inv":0},{"commonName":"Yellow bedstraw","scientificName":"Galium verum","imgSrc":"https://bs.plantnet.org/image/o/8b45fa4de6b2474ea9fd49775f763a699b109161","inv":0},{"commonName":"Norway maple","scientificName":"Acer platanoides","imgSrc":"https://bs.plantnet.org/image/o/3f67eefdeb9588b3fcd8cd65ce24a2f11cd6e6bb","inv":0},{"commonName":"Meadow vetchling","scientificName":"Lathyrus pratensis","imgSrc":"https://bs.plantnet.org/image/o/74f3cbc9151ee23c6b89c00e2a39e92e1bd70aae","inv":0},{"commonName":"Cluster pine","scientificName":"Pinus pinaster","imgSrc":"https://bs.plantnet.org/image/o/4f474ee8ea9b1bfddc0634d8164dc8dc9b9db404","inv":0},{"commonName":"Purple loosestrife","scientificName":"Lythrum salicaria","imgSrc":"https://bs.plantnet.org/image/o/e42dd296a1fd0fe265bde29e60175cb9326bb9ec","inv":0},{"commonName":"Field sorrel","scientificName":"Rumex acetosella","imgSrc":"https://bs.plantnet.org/image/o/b59a263f63cb80c6332e5f580f27cde38025e452","inv":0},{"commonName":"Bitter dock","scientificName":"Rumex obtusifolius","imgSrc":"https://bs.plantnet.org/image/o/bff585ae8c8d50ee79cafc9bccce500a4d0ded8b","inv":0},{"commonName":"Oxeye daisy","scientificName":"Leucanthemum vulgare","imgSrc":"https://bs.plantnet.org/image/o/cc03c870f80172d0faf20d14ff8291d050afd13f","inv":0},{"commonName":"Male fern","scientificName":"Dryopteris filix-mas","imgSrc":"https://bs.plantnet.org/image/o/0d032ccdbc62d58f986aa11f896db68c240059c0","inv":0},{"commonName":"Felonherb","scientificName":"Artemisia vulgaris","imgSrc":"https://bs.plantnet.org/image/o/066b219abe419d2cc635855c06df8f5850497095","inv":0},{"commonName":"Common dogwood","scientificName":"Cornus sanguinea","imgSrc":"https://bs.plantnet.org/image/o/8442e0e7408464c8fe91f7d931d318322bdb3163","inv":0},{"commonName":"Alpine strawberry","scientificName":"Fragaria vesca","imgSrc":"https://bs.plantnet.org/image/o/4f45fd2d82661996f5d5a5613b39bdd1287a56bc","inv":0},{"commonName":"Curled dock","scientificName":"Rumex crispus","imgSrc":"https://bs.plantnet.org/image/o/d2208e617bd795ff20f638d6173bb80d19be4eb6","inv":0},{"commonName":"Cowflock","scientificName":"Caltha palustris","imgSrc":"https://bs.plantnet.org/image/o/d17b1b3c76658c895d661d598251b10784411763","inv":0},{"commonName":"Common marsh bedstraw","scientificName":"Galium palustre","imgSrc":"https://bs.plantnet.org/image/o/a9c39e07a90fb639099fcf9dc6baa753f06cb4dc","inv":0},{"commonName":"Prostrate knotweed","scientificName":"Polygonum aviculare","imgSrc":"https://bs.plantnet.org/image/o/a4462ace6b925f24b1c7dc20e9e7bf76bb63647e","inv":0},{"commonName":"European aspen","scientificName":"Populus tremula","imgSrc":"https://bs.plantnet.org/image/o/f3449aef992de448dcfd4242f94f62780727ae77","inv":0},{"commonName":"Great willowherb","scientificName":"Epilobium hirsutum","imgSrc":"https://bs.plantnet.org/image/o/5fff85d7218e63340017bdcdcc323ef26efbce32","inv":0},{"commonName":"Coltsfoot","scientificName":"Tussilago farfara","imgSrc":"https://bs.plantnet.org/image/o/da90d727cf75a6d32a222cc589162d81392517d4","inv":0},{"commonName":"Common chickweed","scientificName":"Stellaria media","imgSrc":"https://bs.plantnet.org/image/o/367f07ccbdd7c7231d734f959fdfd69d3eac94e2","inv":0},{"commonName":"Wheat","scientificName":"Triticum aestivum","imgSrc":"https://bs.plantnet.org/image/o/18b4a6d639d601cfc3454745b2790572c5b74d63","inv":0},{"commonName":"Flag iris","scientificName":"Iris pseudacorus","imgSrc":"https://bs.plantnet.org/image/o/043ebfc31ccb2999b3354a7fc2626c061d00b5f3","inv":0},{"commonName":"Raspberry","scientificName":"Rubus idaeus","imgSrc":"https://bs.plantnet.org/image/o/3b3a54636d4be030d9ac190474415f3a2f3d7e6b","inv":0},{"commonName":"Shepherd's-purse","scientificName":"Capsella bursa-pastoris","imgSrc":"https://bs.plantnet.org/image/o/ae0bc0533169c2a9daeadbdbb985f7dadcb66ba8","inv":0},{"commonName":"Loosestrife","scientificName":"Lysimachia vulgaris","imgSrc":"https://bs.plantnet.org/image/o/666d004f348647705de4ec55176c203782083167","inv":0},{"commonName":"Jacobaea","scientificName":"Jacobaea vulgaris","imgSrc":"https://bs.plantnet.org/image/o/dc91b312da2f105f27d3b7e70199e9b6b4a111de","inv":0},{"commonName":"Hemp-agrimony","scientificName":"Eupatorium cannabinum","imgSrc":"https://bs.plantnet.org/image/o/7c2ebf31a2ec7e835ed895fd8a6a46016758b3d7","inv":0},{"commonName":"Nonesuch","scientificName":"Medicago lupulina","imgSrc":"https://bs.plantnet.org/image/o/261eb8ea6e09e73f501315c854a604a5914100a7","inv":0},{"commonName":"Hawk's-beard","scientificName":"Lapsana communis","imgSrc":"https://bs.plantnet.org/image/o/cc0d365e7d08c6c337f55b995ec7e1604934b683","inv":0},{"commonName":"Woodbine","scientificName":"Lonicera periclymenum","imgSrc":"https://bs.plantnet.org/image/o/b0e1e131fe63164cf493e2c8805c613e70640a8a","inv":0},{"commonName":"Bitter nightshade","scientificName":"Solanum dulcamara","imgSrc":"https://bs.plantnet.org/image/o/104fdfd9f869285afe86b9ce59b53059953e4a5e","inv":0},{"commonName":"Meadowbell","scientificName":"Campanula rotundifolia","imgSrc":"https://bs.plantnet.org/image/o/7aa04e3027b423278b629678717006502f777e15","inv":0},{"commonName":"Bearbind","scientificName":"Calystegia sepium","imgSrc":"https://bs.plantnet.org/image/o/20b690d0b4fd584c21993b5aad41e4b4a059ff68","inv":0},{"commonName":"Meadow cat's-tail","scientificName":"Phleum pratense","imgSrc":"https://bs.plantnet.org/image/o/7fc8ec91e260f4daf2b0cbbd72a1c317ee78118a","inv":0},{"commonName":"Blue-green sedge","scientificName":"Carex flacca","imgSrc":"https://bs.plantnet.org/image/o/fc6231bca39a314ba0362c517c449afb52171ef8","inv":0},{"commonName":"Ashweed","scientificName":"Aegopodium podagraria","imgSrc":"https://bs.plantnet.org/image/o/0174b4eb4e145a96d959f8068ce8e6e4862db89e","inv":0},{"commonName":"English holly","scientificName":"Ilex aquifolium","imgSrc":"https://bs.plantnet.org/image/o/2c93c09dc9b7f1a7eecb4c517b7d9129a2bfd59e","inv":0},{"commonName":"Common vetch","scientificName":"Vicia sativa","imgSrc":"https://bs.plantnet.org/image/o/2d78b1ec932e8fa41749ae9f2eab1baabc917fe6","inv":0}];


const qnBank = [
    {"q": "How does the Singapore Botanic Gardens Seed Bank contribute to the conservation of plant biodiversity in Southeast Asia?", "o": ["Safeguards biodiversity, supports habitat restoration", "Hosts daily plant tours", "Sells exotic plant seeds", "Offers gardening workshops"], "a": "Safeguards biodiversity, supports habitat restoration"},
    {"q": "What is the primary function of the Singapore Botanic Gardens?", "o": ["Preserves and studies plant biodiversity", "Organizes international food festivals", "Provides luxury accommodations", "Hosts sports events and marathons"], "a": "Preserves and studies plant biodiversity"},
    {"q": "What is the primary goal of the Singapore Green Plan 2030?", "o": ["Achieving sustainable development", "Expanding urban nightlife", "Promoting luxury shopping", "Building more zoos"], "a": "Achieving sustainable development"},
    {"q": "What is the primary focus of the Singapore Botanic Gardens Seed Bank?", "o": ["Conservation, Research & Education", "Tourism and Hospitality", "Amateur Gardening", "Development of Singapore's Economy"], "a": "Conservation, Research & Education"}];


const plantCap = 100;
const dropRates = {
    "newPlant": 0.6,
    "specialPlant": 0.1
}

// for show detail when hovering on lockers
const onLockerMouseEnter = lockerNo => {
    document.querySelector(`#details${lockerNo}`).style.display = "block";
}

const onLockerMouseLeave = lockerNo => {
    document.querySelector(`#details${lockerNo}`).style.display = "none";
}


// exit fieldworkyield display when clicked anywhere
const exitFieldWorkYieldDisp = () => {
    document.querySelector("#fieldWorkDispContainer").style.display = "none";
}

// open/close upgrades menu
const openUpgradesMenu = () => {
    document.querySelector("#upgradesMenuContainer").style.display = "flex";
}

const closeUpgradesMenu = () => {
    document.querySelector("#upgradesMenuContainer").style.display = "none";
}

//close close quiz fail display
const closeQuizFail = () => {
    document.querySelector("#quizFailContainer").style.display = "none";
}


const setUpGame = () => {
    const anchor = document.querySelector("#seedBank");

    for (let i = 0; i < plantCap; i++) {

        anchor.innerHTML += `
            <div class="locker" id="locker${i}">
				<img class="lockerImg" src="../media/locker.png" />
				<div class="details" id="details${i}">
                    <div>
                        Plant Name: ???
                        <br />
                        Quantity: 0
                    </div>
                    <span><img class="plantImg" id="plantImg${i}" src="./" alt="" /></span>
				</div>
			</div>`;

        // let newType = document.querySelector("#locker0").cloneNode(true);
        // // newType.innerHTML = `locker ${i + 1}: ??? (${0})`;
        // newType.className = "locker";
        // newType.id = "locker" + String(i);

        // newType.addEventListener('mouseover', () => {
        //     console.log(event);
        // });

        // newType.addEventListener('mouseout', () => {
        //     // Code to execute when the mouse leaves the newType
        // });
        // anchor.appendChild(newType);
    }
}

const shuffle = array => {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    
    return array;
}


let playerShit;

if (localStorage.getItem("playerData")) {
    playerShit = JSON.parse(localStorage.getItem("playerData"));
} else {
    playerShit = {
        "cash": 1000,
        "fieldWorks": 0,
        "upgrades": {
            "rnd": {
                lvl: 1,
                cost: 1000
            },
            "capacity": {
                lvl: 1,
                cost: 1000
            },
            "revenue": {
                lvl: 1,
                cost: 1000
            }
        },
        "plants": {
            "all": JSON.parse(JSON.stringify(DUMMY_PLANTS)),
            "unlocked": [],
            "locked": {
                "common": shuffle([...Array(90).keys()]),
                "special": shuffle([90, 91, 92, 93, 94, 95, 96, 97, 98, 99])
            }
        }
    }
}
setUpGame();

const updateUI = () => {
    //update seedbank

    for (const i of playerShit.plants.unlocked) {
        const locker = document.querySelector(`#locker${i}`);
        locker.addEventListener("mouseenter", () => {onLockerMouseEnter(i)}, false);
        locker.addEventListener("mouseleave", () => {onLockerMouseLeave(i)}, false);
        
        // locker.style.filter = "brightness(100%)";
        locker.style.opacity = "100%";

        document.querySelector(`#details${i}`).innerHTML = `
            <div>
                Plant Name: ${((playerShit.plants.all)[i]).commonName}
                <br />
                Quantity: ${((playerShit.plants.all)[i]).inv}
            </div>
            <span><img class="plantImg" id="plantImg${i}" src="${((playerShit.plants.all)[i]).imgSrc}" alt="" /></span>`;
    }

    //update cash
    document.querySelector("#cash").innerHTML = playerShit.cash;
    
    //update upgrades
    for (const i of ["rnd", "capacity", "revenue"]) {
        document.querySelector(`#${i}Lvl`).innerHTML = `level: ${((playerShit.upgrades)[i]).lvl}`
        document.querySelector(`#${i}Cost`).innerHTML = `cost: ${((playerShit.upgrades)[i]).cost}`
    }

    document.querySelector("#capacityDisp").innerHTML = `${(playerShit.plants.all).reduce((accumulator, currentValue) => accumulator + currentValue.inv, 0)} / ${playerShit.upgrades.capacity.lvl * 100}`

    document.querySelector("#fieldWorkCost").innerHTML = `Field Work <br /> cost: ${100 * (playerShit.fieldWorks ** 3)}`

    // ok its not rly ui but like same thing
    const playerData = JSON.stringify(playerShit);
    localStorage.setItem("playerData", playerData);
}

const onQuizFail = qnNo => {
    document.querySelector("#quizFail").innerHTML = `
        Oops that wasn't the right answer.
        <br />
        <br />
        Q: ${(qnBank[qnNo]).q}
        <br />
        A: ${(qnBank[qnNo]).a}
        <br />
        <br />
        <br />
        <button onclick="closeQuizFail()">Ok</button>
        `;

        document.querySelector("#quizFailContainer").style.display = "flex";
}

const onOptionSelect = event => {
    event.preventDefault();

    document.querySelector("#quiz").style.display = "none";

    if (event.target.value == (qnBank[document.querySelector("#question").value]).a) {
        rollSeeds();
    } else {
        onQuizFail(document.querySelector("#question").value);
    }

    document.querySelector("#question").innerHTML = "";
    document.querySelector("#question").value = "";
    document.querySelector("#options").innerHTML = "";
}



// following 3 functions interact with dom
const fieldWorkQuiz = () => {
    let randomNo = Math.floor(Math.random() * (qnBank.length));
    let qn = qnBank[randomNo];

    document.querySelector("#question").innerHTML = qn.q;
    document.querySelector("#question").value = randomNo;

    for (const option of qn.o) {
        let anchor = document.querySelector("#options");
        let newOptn = document.createElement("BUTTON");
        newOptn.innerHTML = option;
        newOptn.className = "option";
        newOptn.value = option;
        newOptn.id = "o1";
        newOptn.addEventListener("click", onOptionSelect);
        anchor.appendChild(newOptn);
    }

    document.querySelector("#quiz").style.display = "flex";
}

const fieldWorkDisplay = yieldArr => {
    const fieldWorkDisp = document.querySelector("#fieldWorkDisp");
    fieldWorkDisp.innerHTML = "";

    for (const i of yieldArr) {
        fieldWorkDisp.innerHTML += `
            <div>
                <div><img src="${((playerShit.plants.all)[i.plantNo]).imgSrc}" alt="" /></div>
                <div>(${i.new})</div>
                <div>Plant Name: ${((playerShit.plants.all)[i.plantNo]).commonName}</div>
                <div>x${i.quantity}</div>
            </div>`;
    }

    fieldWorkDisp.style.gridTemplateColumns = `repeat(${yieldArr.length}, 1fr)`;
    document.querySelector("#fieldWorkDispContainer").style.display = "flex";
}




const fieldWork = () => {
    // check if there's space for more seeds (must have enough space for max possible drops)
    if (((playerShit.upgrades.capacity.lvl * 100) - ((playerShit.plants.all).reduce((accumulator, currentValue) => accumulator + currentValue.inv, 0))) < Math.floor(3 * (5 + (Math.log(playerShit.upgrades.rnd.lvl) / Math.log(1.5))))) {
        alert("You do not have enough capacity to store field work yields!");
        return;
    }

    if (playerShit.cash < (100 * (playerShit.fieldWorks ** 3))) {
        alert("You have insufficient funds for a field work!");
        return;
    }

    playerShit.cash -= 100 * (playerShit.fieldWorks ** 3);
    updateUI();
    
    fieldWorkQuiz();
}

const rollSeeds = () => {
    playerShit.fieldWorks++;
    let fieldWorkYieldArr = []

    const fieldWorkYield = Math.floor((Math.random() * (4 + Math.log(playerShit.upgrades.rnd.lvl) - 1)) + 1); // will return a number from 1 to 3 (how many type of bundles of seeds player will get)
    let randomPlant;
    let quantity;

    const repeatPlant = () => {
        randomPlant = playerShit.plants.unlocked[Math.floor((Math.random() * (playerShit.plants.unlocked).length))];
        quantity = (Math.floor((Math.random() * ((6 + Number(Math.log(playerShit.upgrades.rnd.lvl) / Math.log(1.5))) - 3)) + 3));
        playerShit.plants.all[randomPlant].inv += quantity; // bundle of 3-5 seeds

        fieldWorkYieldArr.push({"plantNo": randomPlant, "quantity": quantity, "new": "repeat"});
    }
    for (let i = 0; i < fieldWorkYield; i++) {
        // if player has nothing unlocked, or hit the chances to get new plant
        if (((playerShit.plants.unlocked).length < 100 && Math.random() < (dropRates.newPlant + (0.1 * Math.log10(playerShit.upgrades.rnd.lvl)))) || (playerShit.plants.unlocked).length == 0) {
            // if the player still has locked special plants and hit the chance
            if ((playerShit.plants.locked.special).length > 0 && Math.random() < dropRates.specialPlant) {
                randomPlant = (playerShit.plants.locked.special).pop(); // get a plant index from the preshuffled array (since its already been shuffled, its basically random)
                (playerShit.plants.unlocked).push(randomPlant); // add it to the array of plants the player has now unlocked

                quantity = Math.floor((Math.random() * ((6 + Number(Math.log(playerShit.upgrades.rnd.lvl) / Math.log(1.5))) - 3)) + 3);
                playerShit.plants.all[randomPlant].inv += quantity; // bundle of 3-5 seeds (default)

                fieldWorkYieldArr.push({"plantNo": randomPlant, "quantity": quantity, "new": "new"});
            
            // else if the player still has locked commons
            } else if ((playerShit.plants.locked.common).length > 0) {
                randomPlant = (playerShit.plants.locked.common).pop();
                (playerShit.plants.unlocked).push(randomPlant);

                quantity = Math.floor((Math.random() * ((6 + Number(Math.log(playerShit.upgrades.rnd.lvl) / Math.log(1.5))) - 3)) + 3)
                playerShit.plants.all[randomPlant].inv += quantity; // bundle of 3-5 seeds

                fieldWorkYieldArr.push({"plantNo": randomPlant, "quantity": quantity, "new": "new"});

            // else just give a repeated plant
            } else {
                repeatPlant();
            }
        } else {
            repeatPlant();
        }
    }
    
    console.log(playerShit.plants.unlocked);
    fieldWorkDisplay(fieldWorkYieldArr);
    updateUI();
}


let cooldown = 61;
function nextDisbursement() {
    cooldown = 61;
    let baseDisbursement = (1000 * playerShit.plants.unlocked.length || 200);
    let revenue = playerShit.upgrades.revenue.lvl;

    playerShit.cash += Math.floor(baseDisbursement + baseDisbursement*(0.1*(revenue)));

    updateUI();
}
setInterval(nextDisbursement, 500);
setInterval(() => {
    cooldown -= 1;
    document.querySelector("#cooldown").innerHTML = cooldown + "s";
}, 1000);

// Idt need this, cuz the lockers will 
// function Costoflockers() {
//     let lockercost =  playerShit.plants.unlocked.length ** 4
//     // click on the locker or on a seperate button the unlock the next plant?//

// }

function levelUp(upgrade) {
    const upgradeCost = ((playerShit.upgrades)[upgrade]).cost

    if (playerShit.cash >= upgradeCost){
        playerShit.cash -= upgradeCost;
        (playerShit.upgrades)[upgrade].lvl += 1;
        ((playerShit.upgrades)[upgrade]).cost = 1000*(((playerShit.upgrades[upgrade]).lvl)**2);
    } else {
        alert("You do not have enough funds!");
    }

    updateUI();
}