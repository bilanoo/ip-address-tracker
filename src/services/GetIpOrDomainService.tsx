import { useQuery } from "@tanstack/react-query";

interface GetIpOrDomainServiceProps {
  searchedAddress: string;
}
export const GetIpOrDomainService = ({
  searchedAddress,
}: GetIpOrDomainServiceProps) => {
  const getDataViaIp = async () => {
    const response = await fetch(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=79214059d1c2440285d0b5a39c814cf9${
        searchedAddress && `&ip_address=${searchedAddress}`
      }`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };
  return useQuery({
    queryKey: ["ipAddress"],
    queryFn: () => getDataViaIp(),
    enabled: false,
  });
};
