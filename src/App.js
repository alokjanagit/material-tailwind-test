import React,{useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import './App.scss';
import { Scrollbars } from 'react-custom-scrollbars-2';
import OneauditLogo from './assets/images/OneauditLogo';
import OneauditLogoIcon from './assets/images/OneauditLogoIcon';
import {Accordion,AccordionHeader,AccordionBody,Button,Menu,MenuHandler,MenuList,MenuItem,Avatar,Typography,IconButton,Tabs,TabsHeader,TabsBody,Tab,TabPanel,Collapse,Dialog,DialogHeader,DialogBody,DialogFooter} from "@material-tailwind/react";
import { TbLayoutDashboard,TbReportAnalytics } from "react-icons/tb";
import { VscArchive } from "react-icons/vsc";
import { FiRss } from "react-icons/fi";
import { FaBarsProgress } from "react-icons/fa6";
import { IoDocumentTextOutline,IoSearch} from "react-icons/io5";
import { LuFileSignature } from "react-icons/lu";
import { LiaBookSolid } from "react-icons/lia";
import { PiCaretDownBold,PiCaretLeftBold,PiGearFineFill} from "react-icons/pi";
import {IoMdHelpCircleOutline,IoMdCloseCircle} from "react-icons/io";
import {BiSupport,BiSolidUserAccount} from "react-icons/bi";
import {LuLogOut} from "react-icons/lu";
import {HiOutlineChat,HiOutlineBell,HiOutlinePlus} from "react-icons/hi";
import {HiUser} from "react-icons/hi2";
import {MdOutlineFactCheck} from "react-icons/md";
import {FaFilter} from "react-icons/fa";



import { Modal } from 'react-responsive-modal';


function App() {


  const [accordianOpen, setAccordianOpen] = useState('accr2');
  const handleAccordianOpen = (value) => setAccordianOpen(accordianOpen === value ? 0 : value);

  const [isChatOpen,setIsChatOpen] = useState(false);
  const [isNotiOpen,setIsNotiOpen] = useState(false);
  const [srchshow, setSrchShow] = useState();

  

  function mainmnuShort(){document.body.classList.toggle('menuSmall')}
  function mainmnuBig(){document.body.classList.remove('menuSmall')}

  useEffect(() => {
      document.body.classList.add('light','en');
      return () => {
          document.body.classList.remove('light','en');
      }
  }, []);

  //if device is touch device or not
	if ("ontouchstart" in document.documentElement){document.body.classList.add("touch");} else {document.body.classList.remove("touch");}

  const [activeTab, setActiveTab] = useState("html");

  const [clpsopen, setClpsOpen] = useState(false);
  const toggleClpsOpen = () => setClpsOpen((cur)=>!cur);

  const [modalopen, setModalOpen]=useState(false);
  const modalhandleOpen =() => setModalOpen(!modalopen);



  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);





  return (
    <>
      <div className="portalpnl">
        <div className="">
          <aside className="portalsidemenu h-[100dvh] flex flex-col">
            <header className="logopnl flex items-center"><Link to={'#'}aria-label="Home page"><OneauditLogoIcon/><OneauditLogo/></Link></header>
            <main>
            <Scrollbars autoHide renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>} style={{width:"100%",height:"100%"}}className="cstmscrll">
              <div className="psmenu">
                <Accordion open={accordianOpen === 'accr1'}>
                  <AccordionHeader onClick={() => {handleAccordianOpen('accr1');mainmnuBig()}}className={`mainbtn !p-2 !border-b-0 !text-base !font-normal ${accordianOpen === 'accr1' ? "openpnl" : ""}`}><div><samp><TbLayoutDashboard/></samp> <span>Dashboard</span></div><samp className="arw absolute"><PiCaretDownBold/></samp></AccordionHeader>
                  <AccordionBody className="cnts p-2">11111</AccordionBody>
                </Accordion>
                <Accordion open={accordianOpen === 'accr2'}>
                  <AccordionHeader onClick={() => {handleAccordianOpen('accr2');mainmnuBig()}}className={`mainbtn !p-2 !border-b-0 !text-base !font-normal ${accordianOpen === 'accr2' ? "openpnl" : ""}`}><div><samp><VscArchive/></samp> <span>Files</span></div><samp className="arw absolute"><PiCaretDownBold/></samp></AccordionHeader>
                  <AccordionBody className="cnts p-2">2222</AccordionBody>
                </Accordion>
                <Link to={'#'} className="mainbtn block p-2"><div><samp><FiRss/></samp> <span>Activity feeds</span></div></Link>
                <Link to={'#'} className="mainbtn block p-2"><div><samp><FaBarsProgress/></samp> <span>Review points</span></div></Link>
                <Link to={'#'} className="mainbtn block p-2"><div><samp><IoDocumentTextOutline/></samp> <span>Documents</span></div></Link>
                <Accordion open={accordianOpen === 'accr3'}>
                  <AccordionHeader onClick={() => {handleAccordianOpen('accr3');mainmnuBig()}}className={`mainbtn !p-2 !border-b-0 !text-base !font-normal ${accordianOpen === 'accr3' ? "openpnl" : ""}`}><div><samp><LuFileSignature/></samp> <span>Proposals</span></div><samp className="arw absolute"><PiCaretDownBold/></samp></AccordionHeader>
                  <AccordionBody className="cnts p-2">3333</AccordionBody>
                </Accordion>
                <Link to={'#'} className="mainbtn block p-2"><div><samp><TbReportAnalytics/></samp> <span>Reports</span></div></Link>
                <Accordion open={accordianOpen === 'accr4'}>
                  <AccordionHeader onClick={() => {handleAccordianOpen('accr4');mainmnuBig()}}className={`mainbtn !p-2 !border-b-0 !text-base !font-normal ${accordianOpen === 'accr4' ? "openpnl" : ""}`}><div><samp><LiaBookSolid/></samp> <span>Knowldge base</span></div><samp className="arw absolute"><PiCaretDownBold/></samp></AccordionHeader>
                  <AccordionBody className="cnts p-2">4444</AccordionBody>
                </Accordion>
              </div>
              <div className="psmenu btm mt-auto !pt-0 !pb-0">
                <Link to={'#'} className="mainbtn block p-2"><div><samp><IoMdHelpCircleOutline/></samp> <span>Help</span></div></Link>
                <Link to={'#'} className="mainbtn block p-2"><div><samp><BiSupport/></samp> <span>Support</span></div></Link>
              </div>
            </Scrollbars>
            </main>
            <footer className="flex justify-between items-center"><div className="psmenu btm !pt-0 !pb-0"><button className="mainbtn !m-0 block p-2"><div><samp><LuLogOut/></samp> <span>Log out</span></div></button></div><aside className="me-2"><Button variant="outlined"className="!p-1.5 mnusmllbtn"onClick={mainmnuShort}aria-label="Menu toggle"><PiCaretLeftBold/></Button></aside></footer>
          </aside>
          <main className="portalmainpnl dark:text-gray-300">
            <header className="portalmainhead">
              <section className="lftpnl"><div className={`srchpnl relative bg-white dark:bg-gray-700 rounded-full duration-500${srchshow ? ' show' : ''}`}><aside><div><input type="search"className="rounded-full px-10 py-2 w-full focus:outline-none border !border-blue-gray-200 duration-500 dark:bg-[#0000007d] dark:!border-blue-gray-800"placeholder="Search here..."labelProps={{className:"before:content-none after:content-none"}}/><Button className="rounded-full p-2 leading-none !absolute top-[3px] !duration-300 thmbg1 hvr"style={{insetInlineEnd:"3px"}}onClick={() => setSrchShow(true)}aria-label="Search"><IoSearch className="text-xl"/></Button></div></aside><Button variant="text"className="rounded-full p-2 leading-none !absolute top-[3px] !transition-[.5s] closebtn"style={{insetInlineStart:"3px",color:"#8f8f8f"}}onClick={() => setSrchShow(false)}aria-label="Close search"><IoMdCloseCircle className="text-xl"/></Button></div></section>
              <aside className="flex rgtPnl items-center">
                <div className="me-1 md:me-2 lg:me-4">
                  <Menu open={isNotiOpen}handler={setIsNotiOpen}offset={{mainAxis:10}}placement="bottom">
                    <MenuHandler><IconButton variant="text" className="rounded-full trnsp dark:hover:bg-white dark:hover:bg-opacity-20"aria-label="Notifications"><HiOutlineBell className="text-xl dark:text-white"/></IconButton></MenuHandler>
                    <MenuList className="max-w-screen-xl rounded-md min-w-[350px] bg-prtlheader dark:border-gray-800 dark:text-white">
                      <div>Notification</div>
                    </MenuList>
                  </Menu>
                </div>
                <div className="me-1 md:me-2 lg:me-4">
                  <Menu open={isChatOpen}handler={setIsChatOpen}offset={{mainAxis:10}}placement="bottom">
                    <MenuHandler><IconButton variant="text" className="rounded-full trnsp dark:hover:bg-white dark:hover:bg-opacity-20"aria-label="Chats"><HiOutlineChat className="text-xl dark:text-white"/></IconButton></MenuHandler>
                    <MenuList className="max-w-screen-xl rounded-md min-w-[350px] bg-prtlheader dark:border-gray-800 dark:text-white">
                      <div>Chats</div>
                    </MenuList>
                  </Menu>
                </div>
                <div className="useractn">
                <Menu offset={{mainAxis:12}}>
                    <MenuHandler><Button className="!p-0 !bg-transparent !shadow-none !rounded-none text-black dark:text-white"ripple={false}><div className="inline-block align-middle text-end me-2"><span className='truncate'>John Doe</span><span className="block font-normal opacity-60 normal-case truncate">johndoe@gmail.com</span></div><Avatar variant="circular"alt="John Doe"className="cursor-pointer !w-9 !h-9"src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"/></Button></MenuHandler>
                    <MenuList className="bg-prtlheader !text-gray-800 dark:!text-gray-50 dark:!border-blue-gray-800">
                      <MenuItem className="flex items-center gap-2 hover:!text-blue-gray-800"><HiUser/> <Typography variant="small">My Profile</Typography></MenuItem>
                      <MenuItem className="flex items-center gap-2 hover:!text-blue-gray-800"><PiGearFineFill/> <Typography variant="small">Firm setting</Typography></MenuItem>
                      <MenuItem className="flex items-center gap-2 hover:!text-blue-gray-800"><BiSolidUserAccount/> <Typography variant="small">Chart of account</Typography></MenuItem>
                      <Link to={'#'} className="w-full pt-[9px] pb-2 px-3 rounded-md text-start leading-tight cursor-pointer select-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none flex items-center gap-2 hover:!text-blue-gray-800"><BiSupport/> <Typography variant="small">Support</Typography></Link>
                      <MenuItem className="flex items-center gap-2 hover:!text-blue-gray-800"><MdOutlineFactCheck/> <Typography variant="small">Subscription</Typography></MenuItem>
                      <hr className="my-2 border-blue-gray-50 dark:!border-blue-gray-800" />
                      <MenuItem className="flex items-center gap-2 hover:!text-blue-gray-800"><LuLogOut/> <Typography variant="small">Log out</Typography></MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              </aside>
            </header>
            <section>
              <main className="p-2 lg:p-3">
                <header className="prthd">
                  <div><h2 className="text-2xl font-medium capitalize iblk me-2 vm">My files</h2> <span className="iblk vm"><Link to={`#`} className="plsadd"aria-label="Add new file"><HiOutlinePlus/></Link></span></div>
                  <nav><Button className="!p-2 !rounded thmbg1 hvr !shadow-gray-400 dark:!shadow-gray-900"aria-label="Filter"><FaFilter/></Button></nav>
                </header>

              <section className="mt-8">
                <h5 className="text-xl mb-4">Tab function</h5>
                <Tabs value={activeTab}>
                  <TabsHeader className="csttab rounded-none border-b border-blue-gray-50 bg-transparent p-0"indicatorProps={{className:"bg-transparent border-b-2 border-gray-900 shadow-none rounded-none actbdr",}}>
                    <Tab key={'html'}value={'html'}onClick={() => setActiveTab('html')}className={activeTab === 'html' ? "active" : ""}>HTML</Tab>
                    <Tab key={'css'}value={'css'}onClick={() => setActiveTab('css')}className={activeTab === 'css' ? "active" : ""}>CSS</Tab>
                    <Tab key={'scss'}value={'scss'}onClick={() => setActiveTab('scss')}className={activeTab === 'scss' ? "active" : ""}>Scss</Tab>
                  </TabsHeader>
                  <TabsBody>
                    <TabPanel key={'html'}value={'html'}className="!px-0">HTML content</TabPanel>
                    <TabPanel key={'css'}value={'css'}className="!px-0">CSS content</TabPanel>
                    <TabPanel key={'scss'}value={'scss'}className="!px-0">Scss content</TabPanel>
                  </TabsBody>
                </Tabs>
              </section>



              <section className="mt-8">
                <h5 className="text-xl mb-4">Collaps function</h5>
                <Button onClick={toggleClpsOpen}>Open Collapse</Button>
                <Collapse open={clpsopen}>
                  <div>
                    <section className="py-3">Use our Tailwind CSS collapse for your website. You can use if for accordion, collapsible items and much more.</section>
                  </div>
                </Collapse>
              </section>



              <section className="mt-8">
                <h5 className="text-xl mb-4">Modal function</h5>
                <Button onClick={modalhandleOpen} variant="gradient">Modal open</Button>
                <Dialog open={modalopen} handler={modalhandleOpen}className="cstmodal">
                  <DialogHeader>Its a simple dialog.</DialogHeader>
                  <DialogBody>
                    <p>The key to more success is to have a lot of pillows. Put it this way,it took me twenty five years to get these plants, twenty five years ofblood sweat and tears, and I&apos;m never giving up, I&apos;m justgetting started. I&apos;m up to something. Fan luv.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                  </DialogBody>
                  <DialogFooter>
                    <Button variant="text"color="red"onClick={modalhandleOpen}className="mr-1"><span>Cancel</span></Button> <Button variant="gradient" color="green" onClick={modalhandleOpen}><span>Confirm</span></Button>
                  </DialogFooter>
                </Dialog>
              </section>




              <section className="mt-8">
                <h5 className="text-xl mb-4">Other modal function</h5>
                {/*https://react-responsive-modal.leopradel.com/#multiple-modals*/}
                <Button variant="gradient"onClick={onOpenModal}>Other modal</Button>
                <Modal open={open} onClose={onCloseModal} center classNames={{overlay:'ondtOverlay',modal:'ondtModal'}}>
                  <header><h2>Other model head</h2></header>
                  <main><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></main>
                  <footer>Button pnl</footer>
                </Modal>
              </section>

              



              </main>
            </section>
          </main>
        </div>
      </div>
      
    </>
  );
}

export default App;
