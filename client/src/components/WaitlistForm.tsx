import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWaitlistEmailSchema, type InsertWaitlistEmail } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { CheckCircle2 } from "lucide-react";

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const form = useForm<InsertWaitlistEmail>({
    resolver: zodResolver(insertWaitlistEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertWaitlistEmail) => {
      return await apiRequest("POST", "/api/waitlist", data);
    },
    onSuccess: (_, variables) => {
      setSubmitted(true);
      setEmail(variables.email);
      form.reset();
    },
  });

  const onSubmit = (data: InsertWaitlistEmail) => {
    mutation.mutate(data);
  };

  if (submitted) {
    return (
      <div
        className="flex items-center justify-center space-x-3 p-4 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
        data-testid="status-success"
      >
        <CheckCircle2 className="w-5 h-5 text-primary" />
        <p className="text-sm text-foreground">
          Thank you! We'll contact you at{" "}
          <span className="font-medium">{email}</span>
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Your email"
                    className="h-12 rounded-full bg-background/50 border-white/10 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:ring-2"
                    data-testid="input-email"
                  />
                </FormControl>
                <FormMessage data-testid="error-email" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="h-12 px-8 rounded-full"
            disabled={mutation.isPending}
            data-testid="button-join-waitlist"
          >
            {mutation.isPending ? "Joining..." : "Join waitlist"}
          </Button>
        </div>
        {mutation.isError && (
          <p
            className="text-sm text-destructive mt-2 text-center"
            data-testid="error-submit"
          >
            Oops! Something went wrong while submitting the form.
          </p>
        )}
      </form>
    </Form>
  );
}
