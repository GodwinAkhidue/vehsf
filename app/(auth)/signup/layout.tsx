import { SignupContextWrapper } from "@/context/auth/signup/context";

export default function SignupLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SignupContextWrapper>
                {children}
            </SignupContextWrapper>
        </>
    );
}