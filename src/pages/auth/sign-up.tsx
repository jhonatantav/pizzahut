import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';

import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signUpForm>();

  const signUpForm = z.object({
    email: z.string().email(),
    managerName: z.string(),
    restaurantPhone: z.number(),
    restaurantName: z.string(),
  });

  type signUpForm = z.infer<typeof signUpForm>;

  async function handleSignUp(data: signUpForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success('Restaurante cadastrado com sucesso', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      });
    } catch {
      toast.error('Erro ao cadastrar restaurante');
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant={'ghost'} asChild className="absolute right-8 top-8">
          <Link to={'/sign-in'}>Fazer Login</Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6 ">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Criar Conta Grátis</h1>
            <p className="text-sm text-muted-foreground">Seja um parceiro e comece suas vendas</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="text">Nome do Estabelecimento</Label>
              <Input id="restaurantName" type="text" {...register('restaurantName')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="text">Seu Nome Completo</Label>
              <Input id="managerName" type="text" {...register('managerName')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu email</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu Celular</Label>
              <Input id="phone" type="tel" {...register('restaurantPhone')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar Cadastro
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, voce concorda com nossos{' '}
              <a href="" className="underline underline-offset-4">
                Termos de Serviços
              </a>{' '}
              e{' '}
              <a href="" className="underline underline-offset-4">
                Politicas de Privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
