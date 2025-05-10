import { hashPassword } from "../utils/passwordUtils";
import { Database } from "./database";

// Demo component used to add in sample data to the database

interface MockUser {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

interface MockJob {
    title: string;
    description: string;
    company: string;
    salary: number;
    imageUrl: string;
}

async function createAdminUser() {
    const passwordHash = await hashPassword("admin123");
    Database.createUser(
        "admin@example.com",
        "Administrator",
        "Tester",
        passwordHash,
        "admin"
    )
    console.log("Created admin user: admin@example.com / admin123");
}

// Reads from MOCK_DATA.json
async function createMockUsers() {
    for (const user of MOCK_USERS) {
        const passwordHash = await hashPassword(user.password);
        Database.createUser(
            user.email,
            user.firstName,
            user.lastName,
            passwordHash,
            "user"  // Default to regular "user" role
        );
    }
    console.log(`Inserted ${MOCK_USERS.length} mock users`)
}

function createMockJobs() {
    MOCK_JOBS.forEach(job => {
        Database.createJob(
            job.title,
            job.description,
            job.company,
            job.salary,
            true,
            new Date().toISOString(),
            job.imageUrl
        );
    });
    console.log(`Inserted ${MOCK_JOBS.length} mock jobs`);
}

// Main function for app.ts to call
export async function createMockData() {
    await createAdminUser();
    createMockUsers();
    createMockJobs();
}

// Mock Data Below
const MOCK_USERS: MockUser[] = [{email:"gdeeks0@state.gov",firstName:"Gifford",lastName:"Deeks",password:"fF6EQ!mFi"},
    {email:"itivenan1@taobao.com",firstName:"Ilyssa",lastName:"Tivenan",password:"fO4{htvK`b(%"},
    {email:"cwoodgate2@army.mil",firstName:"Carmine",lastName:"Woodgate",password:"dS8TI4mpq`z"},
    {email:"rnellies3@example.com",firstName:"Romeo",lastName:"Nellies",password:"jP1Z+t7B1/Zmtbb*"},
    {email:"bbickley4@kickstarter.com",firstName:"Barron",lastName:"Bickley",password:"fK8sg_S/1Hz|d/>"},
    {email:"mtrehearne5@china.com.cn",firstName:"Miran",lastName:"Trehearne",password:"bN1cidE1238HPGa2"},
    {email:"jbyrd6@state.tx.us",firstName:"Judd",lastName:"Byrd",password:"eL0/pd1kw|t>|D"},
    {email:"dwandrey7@columbia.edu",firstName:"Della",lastName:"Wandrey",password:"zD6x,R0EDOE_"},
    {email:"tjovovic8@digg.com",firstName:"Tybalt",lastName:"Jovovic",password:"jO8zs}gJS23"},
    {email:"mlonsdale9@ameblo.jp",firstName:"Misha",lastName:"Lonsdale",password:"xO7P!cch<D&!6Kc'"},
    {email:"ltompkinsa@msn.com",firstName:"Lyn",lastName:"Tompkins",password:"dY0I49J6gZICl8>"},
    {email:"tslevinb@digg.com",firstName:"Timi",lastName:"Slevin",password:"xX4.My,la.OQ*p"},
    {email:"cgilfillanc@narod.ru",firstName:"Cathrine",lastName:"Gilfillan",password:"dF0#@?Q0v2MJ</e"},
    {email:"gbentjed@gov.uk",firstName:"Gennifer",lastName:"Bentje",password:"vH7/93~ecxz"},
    {email:"apleye@printfriendly.com",firstName:"Allissa",lastName:"Pley",password:"xR9u6_K9df)B"},
    {email:"gspinkf@list-manage.com",firstName:"Gabriel",lastName:"Spink",password:"qB6*57}e~ao8srzFJ"},
    {email:"ddellenbrookg@sakura.ne.jp",firstName:"Dame",lastName:"Dellenbrook",password:"xV5<@rvbh.aSoH56"},
    {email:"bdoswellh@archive.org",firstName:"Barde",lastName:"Doswell",password:"rL3SD7=dgJ"},
    {email:"tstrelitzi@webnode.com",firstName:"Trudey",lastName:"Strelitz",password:"oD2#0hl~ga"},
    {email:"mlloydsj@craigslist.org",firstName:"Martynne",lastName:"Lloyds",password:"yD3sltXCP7.mG"},
    {email:"dbrownleek@ow.ly",firstName:"Doralyn",lastName:"Brownlee",password:"uZ5?y?{lT>T"},
    {email:"sfeyel@cnet.com",firstName:"Sile",lastName:"Feye",password:"tR30uBiUlsMHDD"},
    {email:"mdugaldm@dion.ne.jp",firstName:"Maison",lastName:"Dugald",password:"fH3giGocH9?EdWWF"},
    {email:"hjeskinsn@oracle.com",firstName:"Hestia",lastName:"Jeskins",password:"bA6kqI{6{<<~m"},
    {email:"mocanavano@jigsy.com",firstName:"Maegan",lastName:"O'Canavan",password:"hE0Wc>TA7O23"},
    {email:"aspeendenp@skype.com",firstName:"Ariela",lastName:"Speenden",password:"vB5&?0o!Jf"},
    {email:"ppettyq@nbcnews.com",firstName:"Piggy",lastName:"Petty",password:"fE0#l,8?"},
    {email:"hburstower@cafepress.com",firstName:"Hildagard",lastName:"Burstowe",password:"bB3|&_jR?"},
    {email:"awoolmores@hc360.com",firstName:"Annis",lastName:"Woolmore",password:"zG66@~t$kyz+`v"},
    {email:"dsoldant@hibu.com",firstName:"Duncan",lastName:"Soldan",password:"yY7zB?kNZnMA"},
    {email:"fivettsu@phoca.cz",firstName:"Fonz",lastName:"Ivetts",password:"hE1jdRkD=yovw"},
    {email:"fcockshutv@simplemachines.org",firstName:"Florida",lastName:"Cockshut",password:"yX9*L*o5y"},
    {email:"jadamowiczw@drupal.org",firstName:"Jennette",lastName:"Adamowicz",password:"qZ3pT{!ig"},
    {email:"gtollfreex@buzzfeed.com",firstName:"Gonzales",lastName:"Tollfree",password:"iM0xb/XM*)(3'kfP"},
    {email:"dfreckinghamy@istockphoto.com",firstName:"Dante",lastName:"Freckingham",password:"fX5X4XbXze@`cG/7"},
    {email:"jleipoldtz@soundcloud.com",firstName:"Johan",lastName:"Leipoldt",password:"kL3/Pyf9'Kl}zh~"},
    {email:"aprujean10@geocities.com",firstName:"Alphard",lastName:"Prujean",password:"yK3v*y,23~..VOW"},
    {email:"lfone11@cargocollective.com",firstName:"Lyell",lastName:"Fone",password:"mW6=5ITqq"},
    {email:"rdougherty12@nydailynews.com",firstName:"Rodina",lastName:"Dougherty",password:"cV8f4!pO'"},
    {email:"acrunkhurn13@tinyurl.com",firstName:"Art",lastName:"Crunkhurn",password:"tO6HeW}rIp"},
    {email:"jwoolaghan14@alexa.com",firstName:"Jammal",lastName:"Woolaghan",password:"bY2mqa.ynl${rEa"},
    {email:"atwoohy15@artisteer.com",firstName:"Ania",lastName:"Twoohy",password:"pM0GL7ohQ}W"},
    {email:"lpretty16@bluehost.com",firstName:"Laurice",lastName:"Pretty",password:"eB9qu1lduu("},
    {email:"bmacandreis17@toplist.cz",firstName:"Bobina",lastName:"MacAndreis",password:"oG3'Ah>a"},
    {email:"hmckinney18@godaddy.com",firstName:"Haywood",lastName:"McKinney",password:"tL1HBpA5Zi.#g.l"},
    {email:"mherion19@de.vu",firstName:"Marcellus",lastName:"Herion",password:"dK5fH.+ndQ26CVcH"},
    {email:"bhallybone1a@sun.com",firstName:"Bartie",lastName:"Hallybone",password:"nJ9NG,23UMe"},
    {email:"mfallens1b@quantcast.com",firstName:"Marianne",lastName:"Fallens",password:"fG4#GAC'=Nfm"},
    {email:"alangmaid1c@cdc.gov",firstName:"Artair",lastName:"Langmaid",password:"nW7k'=h(r"},
    {email:"dfransman1d@marketwatch.com",firstName:"Dolf",lastName:"Fransman",password:"bM535QR0X@0M"}]

const MOCK_JOBS: MockJob[] = [{"title":"Operator","description":"Customer Service Representative","company":"Cogibox","salary":55598,"imageUrl":"http://dummyimage.com/157x100.png/dddddd/000000"},
    {"title":"Product Engineer","description":"Customer Service Representative","company":"Jabbertype","salary":45907,"imageUrl":"http://dummyimage.com/177x100.png/ff4444/ffffff"},
    {"title":"Desktop Support Technician","description":"Software Engineer","company":"Youspan","salary":107711,"imageUrl":"http://dummyimage.com/150x100.png/cc0000/ffffff"},
    {"title":"Analyst Programmer","description":"Marketing Specialist","company":"Lazz","salary":102488,"imageUrl":"http://dummyimage.com/224x100.png/dddddd/000000"},
    {"title":"Professor","description":"Sales Associate","company":"Miboo","salary":106460,"imageUrl":"http://dummyimage.com/236x100.png/ff4444/ffffff"},
    {"title":"Statistician III","description":"Customer Service Representative","company":"Youtags","salary":105299,"imageUrl":"http://dummyimage.com/216x100.png/ff4444/ffffff"},
    {"title":"Human Resources Assistant II","description":"Software Engineer","company":"Tazz","salary":83691,"imageUrl":"http://dummyimage.com/133x100.png/5fa2dd/ffffff"},
    {"title":"Web Designer IV","description":"Marketing Specialist","company":"Rooxo","salary":118149,"imageUrl":"http://dummyimage.com/241x100.png/dddddd/000000"},
    {"title":"Operator","description":"Customer Service Representative","company":"Zoonoodle","salary":46689,"imageUrl":"http://dummyimage.com/246x100.png/5fa2dd/ffffff"},
    {"title":"Professor","description":"Graphic Designer","company":"Devcast","salary":119350,"imageUrl":"http://dummyimage.com/190x100.png/ff4444/ffffff"},
    {"title":"Occupational Therapist","description":"Customer Service Representative","company":"Kwideo","salary":90824,"imageUrl":"http://dummyimage.com/111x100.png/cc0000/ffffff"},
    {"title":"Community Outreach Specialist","description":"Graphic Designer","company":"Kare","salary":58546,"imageUrl":"http://dummyimage.com/237x100.png/dddddd/000000"},
    {"title":"Help Desk Technician","description":"Customer Service Representative","company":"Meeveo","salary":82627,"imageUrl":"http://dummyimage.com/206x100.png/dddddd/000000"},
    {"title":"Research Assistant III","description":"Software Engineer","company":"Abata","salary":51850,"imageUrl":"http://dummyimage.com/165x100.png/dddddd/000000"},
    {"title":"Chemical Engineer","description":"Marketing Specialist","company":"Voonyx","salary":51615,"imageUrl":"http://dummyimage.com/217x100.png/ff4444/ffffff"},
    {"title":"Tax Accountant","description":"Sales Associate","company":"Voolith","salary":105311,"imageUrl":"http://dummyimage.com/100x100.png/dddddd/000000"},
    {"title":"Junior Executive","description":"Sales Associate","company":"Jayo","salary":33290,"imageUrl":"http://dummyimage.com/164x100.png/ff4444/ffffff"},
    {"title":"Civil Engineer","description":"Graphic Designer","company":"Topicstorm","salary":35796,"imageUrl":"http://dummyimage.com/157x100.png/5fa2dd/ffffff"},
    {"title":"Business Systems Development Analyst","description":"Sales Associate","company":"Rhyzio","salary":98709,"imageUrl":"http://dummyimage.com/120x100.png/ff4444/ffffff"},
    {"title":"Food Chemist","description":"Customer Service Representative","company":"Realblab","salary":82920,"imageUrl":"http://dummyimage.com/147x100.png/dddddd/000000"}]