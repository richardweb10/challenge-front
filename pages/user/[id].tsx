/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import UserProfile from '../../components/user/userProfile';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';

export default function user() {

    const router = useRouter();
    const id = router.query.id ?? ''
    return (
        <Layout>
            <main
                className={`cotainer w-3/5 mx-auto`}
            >
                <div>
                    <UserProfile
                        id={id}
                    />
                </div>
            </main>
        </Layout>
    )
}