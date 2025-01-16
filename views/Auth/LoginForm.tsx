"use client"; // If using Next.js 13+ with App Router
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";


const LoginForm = () => {
  const router = useRouter();
  
  const handleLogin = async (loginUser) => {
    loginUser.preventDefault()
      const email = loginUser.target.email.value
      const password  = loginUser.target.password.value
      try {
        console.log(email, password)
        const res = await fetch("http://192.168.0.6:8080/api/v1/auth/login",{
          method: "POST",
          headers: {
            "content-type" : "application/json"
          },
          body: JSON.stringify({email, password}) 
        })

        if(res.ok){
          const data = await res.json()
          console.log(data)

        }else{
          alert("Invalid User.")
        }


      }catch(err) {
        console.log(err)
      }


  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                name="email"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                required
              name="password"
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
