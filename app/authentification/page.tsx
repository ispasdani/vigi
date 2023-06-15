import styles from "@vx/app/authentification/styles.module.scss";
import { PresentationDynamicBanner } from "@vx/components/Banners/PresentationDynamicBanner/PresentationDynamicBanner";
import SignInBtn from "@vx/components/Buttons/SignInButton/SignInBtn";
import { BannerText } from "@vx/components/Texts/BannerText/BannerText";
import { BannerTitle } from "@vx/components/Texts/BannerTitle/BannerTitle";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Authentification() {
  return (
    <div className={styles.authPage}>
      <PresentationDynamicBanner />
      <div className={styles.profilePersonalizationContainer}>
        <img
          src="/assets/images/pp1.png"
          alt="profile-personalization-example"
          className={styles.profilePersonalizationOne}
        />
        <img
          src="/assets/images/pp2.png"
          alt="profile-personalization-example"
          className={styles.profilePersonalizationTwo}
        />
        <div className={styles.profilePersonalizationContainerTop}>
          <BannerTitle
            color="#000000"
            bannerTitleText="Personalize your space"
          />
          <div className={styles.profilePersonalizationTextWrapper}>
            <BannerText
              color="#000000"
              bannerText="Soon we will lunch a new future that will allow you to customize your profile with a few already predefined templates. "
            />
            <BannerText
              color="#000000"
              bannerText="Create a blog for free to have a personalized home for your writing. Brand your space and share your writing with readers on any device."
            />
          </div>
        </div>
        <div className={styles.profilePersonalizationContainerBottom}>
          <SignInBtn />
        </div>
      </div>
      <div className={styles.infoGraphics}>
        <div className={styles.infoGraphicsLeft}>
          <div className={styles.infoGraphicsTextWrappers}>
            <BannerTitle
              color="#000000"
              bannerTitleText="Write and article and make yourself known"
            />
            <BannerText
              color="#000000"
              bannerText="Collaborate with others or publish under a brand name. Use our story submission system and expressive customization options."
            />
          </div>
        </div>
        <div className={styles.infoGraphicsRight}>
          <div className={styles.infoGraphicsTextWrappers}>
            <BannerTitle
              color="#000000"
              bannerTitleText="Sign in now to be able to access everything on Vigilante X"
            />
            <BannerText
              color="#000000"
              bannerText="To be able to leave comments or like someones article you need to be Signed in. This is our way of protecting your identity"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
