import { useQuery } from "@tanstack/react-query";

interface GetIpOrDomainServiceProps {
  searchedAddress: string;
}
export const GetIpOrDomainService = ({
  searchedAddress,
}: GetIpOrDomainServiceProps) => {
  const getDataViaIp = async () => {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_9v4PLJEcWzxIeXXnLNM9Wlt1BwNDX${
        searchedAddress && `&ipAddress=${searchedAddress}`
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
