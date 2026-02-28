import { useMemo } from 'react';
import { useSiteSettings } from '../../entities/site-settings';
import { PasswordPage } from './password-page';
import { mapSiteSettings } from './utils';
import { FormProvider, useForm } from 'react-hook-form';
import { authSchema, type TAuth } from './model';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCheckPassword } from '../../entities/auth';
import { useAuth } from '../../shared/process/context';
import { useLocation, useNavigate, type Location } from 'react-router-dom';

type LocationState = {
  from?: {
    pathname: string;
  };
};

type TLocation = Location & { state: LocationState };

export const PasswordPageConnector = () => {
  const navigate = useNavigate();
  const location = useLocation() as TLocation;
  const { setIsAuthorized } = useAuth();

  const formMethod = useForm<TAuth>({
    mode: 'all',
    resolver: zodResolver(authSchema),
  });

  const { data } = useSiteSettings();
  const { mutate } = useCheckPassword();

  const screenData = useMemo(() => mapSiteSettings(data), [data]);

  const from = location.state?.from?.pathname || '/';

  const handleClick = () => {
    const password = formMethod.getValues('password');

    mutate(password, {
      onSuccess: () => {
        setIsAuthorized(true);
      },
      onError: () => {
        formMethod.setError('password', {
          type: 'server',
          message: 'Неверный пароль, попробуйте снова',
        });
        // TODO: перенести когда будет готов бек
        setIsAuthorized(true);
        navigate(from, { replace: true });
      },
    });
  };

  return (
    <FormProvider {...formMethod}>
      <PasswordPage
        accentColor={screenData?.accentColor}
        email={screenData?.email}
        onClick={formMethod.handleSubmit(handleClick)}
      />
    </FormProvider>
  );
};
