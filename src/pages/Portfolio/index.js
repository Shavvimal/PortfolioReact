import React, { useEffect, useRef, useState } from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import { } from "./assets/animate.js"
import { Card } from '../../components';
import { Switch, Route } from 'react-router-dom';


const Portfolio = () => {

  const shuffle = (arr) => {
    let c = arr.length, rand;
    while (0 !== c) {
      rand = Math.floor(Math.random() * c);
      c--;
      [arr[c], arr[rand]] = [
        arr[rand], arr[c]];
    }
    return arr;
  }


  const [WebCards, setWebCards] = useState(

    [{ Name: "Fact-Ori", Description: "Fact-ori is a community fact sharing site that allows users to post and share interesting facts. The site has a range of functionality for users, including posting anonymous fact entries, add gifs from giphy in an entry using the giphy API, view other peoples' entries, react to other peoples’ entries with an emoji & comment on other people’s entries.", gifurl: "https://lh3.googleusercontent.com/NCuAbU1nwnHJQnC0C-o4Fg2DcyD1QAHMl8xNIh4Ml62eFdUOmQ9nfUtomoh8qknmU6l_mWb_QMF7LgSY0KiRnvleMb83s2SjMgcGPDhT3U1YYvrOhOsT9XB1yNS1ca5f2xCW5f0CGaInHrcB0fl-Y-641H-f-9NiRQTmSDOm2fHCJFHrosjDQ3hDBRhtgG1aD30S2qk5GToqOl-E6JLN9Jdz25Rg6ryzikqo_UPWg2BBGFZNB7-T8XG6fFhzs6IIjGmZkWB8D1uFcz56y67PcjUWhYPjHPAilDLprcOL1f-3rEl1CvhLIiTvmwgB_2W96v-U2SJhsUYTG800OlWZCx5bJQFiamthIlxybDn24dFmscIDZcEAIAPBra4dOOl63LW78LB3FmZcHA9avS2_nyNoh9lGTmymvGa36y3K92U8_A_DXy3mez1vU5AtcityYTgpc_F6SVxNXmfJTw8fiQ-FxzDDB4MM5mauL-ydIgRwyDQTmmKJ2yOnWMTvCWtPksHdaE_VwW_B2znk9tudzK7A4Q8UeW_Q3tD7b490BrLAJnmtI29nPS7UTGB1MpdLDFfPzbvjmJwEKwhACNK0lWOcPitpGo3_vQvjYKcET0dipWc8n4NBJosjptaPvvXiwqkAvm16eBW5uMktnbvasmS756mO2sF60i4BstwVS1UI_igO4whz7YkFYeHIA6afGxtFR9LW3BbWGt8eCRGKoA=w600-h337-no?pageId=101864924326228188098&authuser=1", repoLink: "https://github.com/Shavvimal/Fact-Ori", siteLink: "https://fact-ory.netlify.app/", arrayOfWords: ["HTML", "JavaScript", "Tailwind CSS", "Node.js", "Express", "Docker"], graphic:false },
    { Name: "The Treasury", Description: "The Treasury allows users to track their investment portfolio, with their chosen stocks, monitoring the individual price changes, returning their profit/loss on their investments, trace the movement of their individual holdings and get a general idea of how their portfolio is doing. It uses Authentication and Authorization and a login page. ", gifurl: "https://lh3.googleusercontent.com/GUtQldYRVVcCDi9c0htdW3o_j3WxfWkZGifCwyQoCLg-PtnK9_AIv5wjcFqYOITYgy9Jy0o1hx3sdwRHi7T3rxWfe1ejRFa9q8OAmq6xwA1kVSEnED0hwkqdn0vTBzWLuhBDEFref4bcle8daHCGXxH2nszS6OR0AlyCtiafIBE_RH1eYJr4oAB_kH-NffOMZFLBYV_4Lx_uuwSx2xiOZWzkzkKAExIrrRHsjUbMBVu0Ygap2vN2sAc1tymm18ONl-WIdtftFpPqjesfc9Us2I9hsUoMrUER-844a7TXIRINlJ8L7IPCETqeWtX72y95Y0fmt3tLRrBjXBJ-JYTl8cr43NT5sk-DwJCoXFDxdboA7t4Ipbz3_BlOGTmPzBknX3K6VD_bJ2jcWu8W5rbSggbQNG5YWYaYPyWfB1EYK3bnBif70SaZuv11-6In6khl2w2DrMwx6IkPdzGc86bLAzIWxeC9v2JrxPiNWL-oUND0nRbIK_w7IXsoTFIRFWhU9xP9KVujmerROv9c0w3s4nWyxc7epiZAWIGwuOBan2BgfCfMM2esjXNe888iexuI17u-IlMsIwxTLnlbC0C4AfIBotUkojVOXY8zFSgbEWV4i2BGP-3PGQYxGFvcoKAvw3tO32vAFzYvOY9ZBBAYGdKWj5quUfZCiQttWPP7HBtw9pN_urQ9drWCie5RikoazG2Y0xECLLGZ0pdq0GAIdw=w600-h338-no?pageId=101864924326228188098&authuser=1", repoLink: "https://github.com/Shavvimal/Galic-NaN", siteLink: "https://the-treasury.netlify.app/", arrayOfWords: ["Bcrypt", "JWT", "JavaScript", "Express", "Node.js", "Docker", "SQL", "AWS", "Tailwind CSS", "Greensock"], graphic:false },
    { Name: "Anonymous Blog site", Description: "This site was a 23-hour code challenge practice clone of telegra.ph, with a minimalistic front-end and PostgreSQL and a database API served on an AWS EC2 instance as a backend to store posts. It allows users simply to post anonymously. Using AWS circumvents the issue of Heroku servers going to sleep. ", gifurl: "https://lh3.googleusercontent.com/TEpNdvoi0CtubFN3v4buV8n5vfFY15h7LnHeQr5d96VCyShTlxBcyBSr65e6zk32GJP8sqD60MAyXTKGpDarQw4Xsgu9-MLemrLXthePl_o0mMRDmXMu4UMgaeCdSx-fq-faa1IGQg5d8P-9geTNYNwV4X9gtfjABlU4qbMrtDB2l0Z3yEqR526Rw1AWHzkFz0kC9OHRWe-AxB-0dmBW72p80tLBlQ1jBIjfx1lvBwVTiqdNkB5OvoRUcNhnaQclX5fSIw73s0BCe2cKWZoJgQ9H-641ntLqiyGFhcmz74ZdRX7XBi2FdMKC9Bu3KHinn0cX1UI-ZQsFnXdMLJvbIL7xtg6BSkjQNCSzYHl3Xsqg2vro3Xxq38y6MNOSbVsSK87ys7PuAmcWcQnXDjiglELmW54fqF3EJEQ2uk09Yp85o3emIZVgNV1rGmnq_wBhwAkiHlGa6gf_cNk7_601lqLvWgWll5Xu-AtdqIl-LJKo0agPYDURRG6EJdDXp8RhuzQ3G86hTafa9ASDeLH6U4qcjPVwpztPFGWnoSQmbtbcWJpgsZJh8d4aL8Vfo96UgfSmmXeHc8niQTg65eNx1cBv7yvfjJ1vRESvODmlVCgikL1ySygdpaI4PMFdinTIeNMOO7WyPbSN1OGrcv5oE9Sz6rmk2XFJ0ffDfoYtw6t0ujPGz2wmZp_SC9PlHtA2ua9kbvSBvI4EHxqHyX8VIA=w600-h338-no?pageId=101864924326228188098&authuser=1", repoLink: "https://github.com/Shavvimal/LAP_2_Code_Challenge_Parent", siteLink: "https://anon-blog.netlify.app/", arrayOfWords: ["Amazon", "AWS", "PostgreSQL", "Node.js", "Express", "Docker"], graphic:false }]

  )



  const renderWebCards = () => shuffle(WebCards).map((t) => <Card key={t.Name} siteName={t.Name} description={t.Description} gifurl={t.gifurl} repoLink={t.repoLink} siteLink={t.siteLink} arrayOfWords={t.arrayOfWords} graphic={t.graphic} />)





  const [GraphicsCards, setGraphicsCards] = useState(

    [{ Name: "Galaxy Girl", Description: "This was my first ever digital painting using a graphics tablet. This was a really fun piece to make while learning all the basics of working in a new and different medium. ", gifurl: "https://lh3.googleusercontent.com/YmnBzzvFRQmc1ZO2KZDmkifK2yQwEubHUzYt_POTav0V0n-AuZm4ghTHkpW43-MxH_5SguKqjDu8ILRBHMDMm-1yehpKiNkZ9vueUB5bMi-BkuYDH9VdOUeQDUAI96n5WcoDfMbLapfsZJfXgowkkOg-XU2oX9kXukeLOt6bjqGE5uUM6-v4cBw3PKrD89sq0ANFRXZFrpxutoNaHny_Bm4IX9xRZBsTXtWyxgi9HM8zB3tTWYTJl6WV86Ch8gKnGbZbuw6jLPdOFDc7-YkMzdcbzo1gkzn9TutTo55h11j_dunlCAnfM4ev9EKClvHWOwHr6XmF44jhNjV5Al2Wvb4EBUR-ZUrdmnVCxZN3Q5mmLGOBT2y5argmlGxhabALV6jNZXS_D1mzm8FUNVBN3UP_Z8NjWDmaTukii2bmhauOuaXPuF99VHG970jJTchF-H85YHm74L1xbLPXkxZozVsZUdMh-B8JAzp967KrfE8k7603ftv6bxkUf-QG1I8ZMGVtCzsHilnBYvGPdhtgV1aS3fhbnEb5zoVTaH_5iNATzDKXw6EGDpZQUXulZJjiQu8HeY5Xb01W5KYynA-OygYf2k8wzClatfWnlaa0YjT1lZie95bnTCcZ4pMwjB9m9v9l_p6vcmzsp73BT4XfAz6fy5GjgA0YrIopsSn5K6WnMf7sSZwTHXpkMQj7FU2Dd_EyvFFzvnUHcjBAD26d3w=w600-h338-no?pageId=101864924326228188098&authuser=1", repoLink: "https://www.deviantart.com/shavgraphics/art/Galaxy-Girl-847582040", siteLink: "https://youtu.be/jUyj_YXad_k", arrayOfWords: ["Adobe PhotoShop"], graphic:true },
    { Name: "Zuko on the Beach", Description: "After rewatching one of my favorite shows of all time, Avatar: The Last Airbender, I decided to do a fanart of my favorite scarred Prince - Prince Zuko.", gifurl: "https://lh3.googleusercontent.com/WfTHFHE-mp5VE55ALW3m_VhlO00dzILB3WIBidSdtcfnAdYKTjTghqj_MskVgG3-MFPwIUVPoIHPhtfF_SB5qnPMb_BDCN65mp-S6RwC8H-NwG7YPCIfaVqBJwWNm8GJfHu2fbkGRaKtFJy7KmOU2YRk8gusk9HddrwIjM0J_6lv86x5udIwadVwmpE3g0tdAmXdD5hAF14M9-MAePZDUUbNEhBo-Lh-MhRJboQRq1xgMR3arN1S1bDBq7SwWrE7IHr3aQx73tvIf6xz4P7FmaoCRw5kRbE0zm_lwMsLYlrX7OfMvHB3PLT93Hw4v6cbTgVmwNrurdeVe0qHHsnzrpevRbxVOaDunzozKl6jmMg9fpmqQzx0dW691c2FI6Mae6vqrhm_WRWkySQ_A8vfE7no_jND1i1mP2euuefEzsk7wG57EUXsbXd-2pI9Msp76v6inx0cH3iflp4eoE6DhHil2TIRyveOSeephTwJRF3uhjnHhUgszUb-C5_x3kWn1RHUbY6Tj1ZZz3THo0oDGVSXXipLVvQhqQnwvV8g-f0lpgNH2vXot9rF9Le8k8B4gWA1YLFxLAfmHxyPLfX2WrcIsyRx2lgcS7aVBOZ5EIHexUu8tEdzf58FXlPBCJ0Fb2hmdXj1xpShiEyM09ftk7iGkja-Q_EJ-_m3t44fptKnH_-80eS-4R056mGlJ9QXegO3SVtFsz4pf4eoY3Q4mA=w600-h338-no?pageId=101864924326228188098&authuser=1", repoLink: "https://www.deviantart.com/shavgraphics/art/Zuko-868343159", siteLink: "https://youtu.be/2audU-MHQ3Q", arrayOfWords: ["Adobe PhotoShop"], graphic:true },
    ]

  )



  const renderGraphicsCards = () => shuffle(GraphicsCards).map((t) => <Card key={t.Name} siteName={t.Name} description={t.Description} gifurl={t.gifurl} repoLink={t.repoLink} siteLink={t.siteLink} arrayOfWords={t.arrayOfWords} graphic={t.graphic} />)





  return (<><a class="mb-10" id="portfoliosect" ></a>



    <div id="portfolio" class="flex flex-col justify-center md:justify-start pt-8 md:pt-12 px-8 md:px-24  lg:px-44 h-auto ">
      <h1 class="bodyheadercol text-left text-4xl font-extrabold">My Portfolio</h1>
      <h2 class="text-left text-2xl py-3 italic" > Please feel free to check out some of my work! </h2>
      <div class="">
        <NavLink to="/Portfolio/Web" activeClassName="current  ">Web</NavLink>
        <NavLink to="/Portfolio/Graphic" activeClassName="current">Graphic</NavLink> </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 w-auto h-auto pt-8 p-4 ">
        <Switch>
          <Route exact path="/">{renderWebCards()}</Route>
          <Route path="/AboutMe">{renderWebCards()}</Route>
          <Route path="/TechStack">{renderWebCards()}</Route>
          <Route path="/Contact">{renderWebCards()}</Route>


          <Route exact path="/Portfolio">

            {renderWebCards()}

          </Route>
          
          <Route path="/Portfolio/Web">

            {renderWebCards()}

          </Route>
          <Route path="/Portfolio/Graphic">

            {renderGraphicsCards()}


          </Route>
        </Switch>

      </div>

    </div>


  </>
  )


}

export default Portfolio;
