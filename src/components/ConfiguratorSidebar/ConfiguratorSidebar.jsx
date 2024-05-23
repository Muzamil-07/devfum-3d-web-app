import {
  ConfiguratorName,
  IndustryPageSideBar,
  SideBarValueContainer,
  SidebarMainContainer,
  SidebarOptionSelectionContainer,
  SidebarOptionsImageContainer,
} from "@/themes/themes";
import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import Image from "next/image";

const ConfiguratorSidebar = ({ open, openSet, chooseOptionSet, data }) => {
  const isSmallScreen = useMediaQuery("(max-width: 850px)");
  return (
    <IndustryPageSideBar
      anchor={isSmallScreen ? "bottom" : "right"}
      open={open}
      onClose={() => openSet(false)}
    >
      <SidebarMainContainer>
        <SideBarValueContainer>
          <ConfiguratorName variant='h5' className='heading'>
            {data.name}
          </ConfiguratorName>
          <ConfiguratorName variant='caption'>{data.description}</ConfiguratorName>
        </SideBarValueContainer>
        <SideBarValueContainer>
          <ConfiguratorName variant='h5' className='heading'>
            Choose {data?.options?.type}
          </ConfiguratorName>
          <Grid container columns={2} justifyContent='center' gap={3}>
            {data?.options?.values?.map((item, index) => {
              return (
                <Grid item key={index}>
                  <SidebarOptionSelectionContainer>
                    <SidebarOptionsImageContainer
                      props={{ backgroundColor: item.text }}
                      onClick={() => chooseOptionSet({ type: data.options.type, value: item.text })}
                    >
                      {item.img && (
                        <Image
                          src={item.img}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      )}
                    </SidebarOptionsImageContainer>
                    <ConfiguratorName variant='body2'>{item.text}</ConfiguratorName>
                  </SidebarOptionSelectionContainer>
                </Grid>
              );
            })}
          </Grid>
        </SideBarValueContainer>
      </SidebarMainContainer>
    </IndustryPageSideBar>
  );
};

export default ConfiguratorSidebar;
