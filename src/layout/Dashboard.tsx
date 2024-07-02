import {FC, useState, useEffect} from "react";
import {StackDivider, VStack} from "@chakra-ui/react";
import type {ActiveView} from "../types/common";
import Header from "../components/base/header";
import Body from "../components/base/body";
import Footer from "../components/base/footer";

const Dashboard: FC = () => {
  const [activeView, setActiveView] = useState<ActiveView>('home');

  useEffect(() => {
    console.log('active view: ', activeView)
  }, [activeView]);
  
  return (
    <VStack
      divider={<StackDivider borderColor='gray.200' />}
      spacing={5}
      align='stretch'
    >
      <Header viewSetter={setActiveView}/>
      <Body />
      <Footer />
    </VStack>
  )
};

export default Dashboard;