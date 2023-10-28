import React from "react";
import LogoMain from "@/view/widgets/logo";
import Link from "next/link";
import uris from "@/config/uris/uris";
import styles from "./styles.module.scss";
import cn from 'classnames'

const Header = () => {
    return (
        <div className={`${styles['header-container']} ${styles['dark-theme']}`}>
            <div className={styles['logo-container']}>
                <LogoMain />
            </div>
            <div className={styles["nav-container"]}>
                <Link href={uris.home} className={styles["header-nav"]}>
                    Home
                </Link>
                <Link href={uris.products} className={styles["header-nav"]}>
                    Products
                </Link>
                <Link href={uris.pdf} className={styles["header-nav"]}>
                    PDF
                </Link>
                <Link href={uris.charts} className={styles["header-nav"]}>
                    Charts
                </Link>
                <Link href={uris.excel} className={styles["header-nav"]}>
                    Excel
                </Link>
                <div className={cn(styles["nav-icons-section"], styles["nav-container"])}>
                    <Link href={uris.cart} className={cn(styles['header-nav'], styles.cart)}>
                        Cart
                    </Link>
                    <Link href={uris.profile} className={cn(styles['header-nav'], styles.profile)}>
                        Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
